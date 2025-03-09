const{test, expect} = require('@playwright/test');
const { match } = require('assert');
test.describe('UI testing',()=>
{
test ('First test',async ({page})=>{
    await page.goto("https://www-cen-uat1-glo.non-prod.marketing.bat.net/de/de/");
    const tit = await page.title();
    //console.log('Page Title:', tit);
    expect(tit).toBe('Heater von glo™: Unsere Alternative für Raucher | glo ™');
    
})
})