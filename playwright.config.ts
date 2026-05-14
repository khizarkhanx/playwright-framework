import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL,

    // Headless in CI, headed locally
    headless: true, // Force headless for CI stability

    // Capture screenshot only on failure
    screenshot: 'only-on-failure',

    // Keep video only for failed tests
    video: 'retain-on-failure',

    // Generate trace on retry
    trace: 'on-first-retry',

    // Better stability
    actionTimeout: 15000,
    navigationTimeout: 30000,

    // Ignore HTTPS issues if needed
    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],

  outputDir: 'test-results/',

});