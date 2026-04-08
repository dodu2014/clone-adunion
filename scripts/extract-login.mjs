import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const outputDir = path.resolve(process.cwd(), 'scripts', 'extract-login');
fs.mkdirSync(outputDir, { recursive: true });

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://uniad.dcloud.net.cn/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const content = await page.content();
  fs.writeFileSync(path.join(outputDir, 'rendered.html'), content, 'utf8');

  const title = await page.title();
  fs.writeFileSync(path.join(outputDir, 'title.txt'), title, 'utf8');

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.waitForTimeout(500);
    const screenshotPath = path.join(outputDir, `${viewport.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
  }

  const urls = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll('img')).map((img) => ({
      src: img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight,
      classes: img.className,
      parentClasses: img.parentElement?.className || null,
    }));
    const links = Array.from(document.querySelectorAll('a')).map((a) => ({
      href: a.href,
      text: a.textContent?.trim(),
      classes: a.className,
      rel: a.rel,
      target: a.target,
    }));
    const scripts = Array.from(document.querySelectorAll('script')).map((s) => s.src).filter(Boolean);
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map((s) => s.href);
    return { images, links, scripts, styles };
  });
  fs.writeFileSync(path.join(outputDir, 'assets.json'), JSON.stringify(urls, null, 2), 'utf8');

  const sections = await page.evaluate(() => {
    const topLevels = Array.from(document.querySelectorAll('#app > *'));
    return topLevels.map((el) => ({
      tag: el.tagName,
      classes: el.className,
      id: el.id,
      text: el.textContent?.trim().slice(0, 200),
      html: el.outerHTML.slice(0, 500),
    }));
  });
  fs.writeFileSync(path.join(outputDir, 'top-level-elements.json'), JSON.stringify(sections, null, 2), 'utf8');

  const css = await page.evaluate(() => {
    const all = [];
    const elements = Array.from(document.querySelectorAll('body *')).slice(0, 200);
    elements.forEach((el) => {
      const cs = getComputedStyle(el);
      all.push({
        tag: el.tagName,
        classes: el.className,
        text: el.textContent?.trim().slice(0, 100),
        styles: {
          display: cs.display,
          position: cs.position,
          width: cs.width,
          height: cs.height,
          margin: cs.margin,
          padding: cs.padding,
          fontSize: cs.fontSize,
          lineHeight: cs.lineHeight,
          fontWeight: cs.fontWeight,
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          boxShadow: cs.boxShadow,
          borderRadius: cs.borderRadius,
          textAlign: cs.textAlign,
        },
      });
    });
    return all;
  });
  fs.writeFileSync(path.join(outputDir, 'computed-styles.json'), JSON.stringify(css, null, 2), 'utf8');

  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
