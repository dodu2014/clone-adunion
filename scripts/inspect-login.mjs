import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const outputDir = path.resolve(process.cwd(), 'scripts', 'extract-login');

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto('https://uniad.dcloud.net.cn/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const nodes = await page.evaluate(() => {
    const results = [];
    const app = document.querySelector('#app');
    if (!app) return results;
    const walk = (el, depth = 0) => {
      if (depth > 2) return null;
      const info = {
        tag: el.tagName,
        id: el.id || null,
        classes: el.className?.toString().trim() || null,
        text: el.textContent?.trim().replace(/\s+/g, ' ').slice(0, 200) || null,
        childCount: el.children.length,
      };
      const children = Array.from(el.children).map((child) => walk(child, depth + 1)).filter(Boolean);
      if (children.length) info.children = children;
      return info;
    };
    const appChildren = Array.from(app.children);
    return appChildren.map((el) => walk(el, 0));
  });
  fs.writeFileSync(path.join(outputDir, 'app-tree.json'), JSON.stringify(nodes, null, 2), 'utf8');

  const sections = await page.evaluate(() => {
    const selectors = ['section', '[role="banner"]', '[role="contentinfo"]', '[class*=section]', '[class*=banner]', '[class*=hero]', '[class*=footer]'];
    const results = [];
    const seen = new Set();
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        results.push({
          selector: sel,
          tag: el.tagName,
          classes: el.className?.toString().trim() || null,
          text: el.textContent?.trim().replace(/\s+/g, ' ').slice(0, 200) || null,
          childCount: el.children.length,
        });
      });
    });
    return results;
  });
  fs.writeFileSync(path.join(outputDir, 'sections.json'), JSON.stringify(sections, null, 2), 'utf8');

  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
