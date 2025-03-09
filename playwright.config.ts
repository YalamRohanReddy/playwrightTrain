import { chromium, defineConfig, devices } from '@playwright/test';
Headers: false

export default defineConfig({

  testDir: './tests/',
  timeout : 40 * 1000,
  use: {
    browserName : 'chromium',
    headless : false,
    launchOptions: {
      args: ['--start-maximized'],  
    },
    viewport: null,
  },
  projects:[
    {
      name : 'UI test',
      testDir: './tests/',
      //grep: /UI testing/,
    }
  ],
  //reporter : 'html'
  reporter: [
    ['line'],
    ['allure-playwright', { resultsDir: 'allure-results' }]
  ],
});
module.exports

