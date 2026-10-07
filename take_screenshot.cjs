const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'C:/Users/Administrator/.gemini/antigravity-ide/brain/882d1d41-f50f-4f5a-9d4e-974ae4a1bc42/scratch/home_screenshot.png', fullPage: true });

  await browser.close();
  console.log("Screenshot taken.");
})();
