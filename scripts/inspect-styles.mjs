import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('https://uniad.dcloud.net.cn/login', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const bodyStyles = await page.evaluate(() => {
    const cs = getComputedStyle(document.body);
    return {
      fontFamily: cs.fontFamily,
      backgroundColor: cs.backgroundColor,
      color: cs.color,
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
    };
  });
  const heroHeading = await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('h1, h2, h3, div')).find((node) => node.textContent?.includes('uni-ad'));
    if (!el) return null;
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName,
      text: el.textContent.trim().slice(0, 100),
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
      fontWeight: cs.fontWeight,
      color: cs.color,
    };
  });
  const nav = await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('a, div')).find((node) => node.textContent?.includes('注册'));
    if (!el) return null;
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName,
      text: el.textContent.trim(),
      fontSize: cs.fontSize,
      color: cs.color,
      fontWeight: cs.fontWeight,
    };
  });
  console.log(JSON.stringify({ bodyStyles, heroHeading, nav }, null, 2));
  await browser.close();
})();
