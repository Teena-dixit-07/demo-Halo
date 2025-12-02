const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://www.saucedemo.com/',
    screenshot: 'only-on-failure', 
    trace: 'on-first-retry',       
    video: 'retain-on-failure',    
  },

});
