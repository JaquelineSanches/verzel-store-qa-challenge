const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://verzel-store.qa-test-verzel-store.workers.dev',
},

  projects: [
    {
    name: 'api',
    testMatch: /api\/.*\.spec\.js/,
},

    {
      name: 'chromium',
      testMatch: /ui\/.*\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      testMatch: /ui\/.*\.spec\.js/,
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      testMatch: /ui\/.*\.spec\.js/,
      use: { ...devices['Desktop Safari'] },
    },
  ],
});