const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  const content = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section')).map(s => {
      return {
        id: s.id,
        className: s.className,
        visible: s.querySelector('.reveal')?.classList.contains('visible'),
        height: s.offsetHeight,
        display: window.getComputedStyle(s).display,
        opacity: window.getComputedStyle(s).opacity
      }
    });
  });

  console.log(JSON.stringify(content, null, 2));

  await browser.close();
})();
