import { chromium, defineConfig, devices } from '@playwright/test';
Headers: false

export default defineConfig({

  testDir: './tests/',
  timeout : 40 * 1000,
  use: {
    browserName : 'chromium',
    headless : false
  },
  projects:[
    {
      name : 'UI test',
      testDir: './tests/UItest.spec.js',
      grep: /UI testing/,
    }
  ],
  reporter : 'html'
});
module.exports
