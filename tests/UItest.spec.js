const{test, expect} = require('@playwright/test');
const { match } = require('assert');
test.describe('UI testing',()=>
{
test ('First test',async ({page})=>{
    await page.goto("https://www-cen-uat1-glo.non-prod.marketing.bat.net/de/de/")
    const title = console.log(await page.title)
    expect()
    const { width, height } = await page.evaluate(() => {
        return {
          width: window.screen.width,
          height: window.screen.height
        };
      });
      await page.setViewportSize({ width, height });
})
})