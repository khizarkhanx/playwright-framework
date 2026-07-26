import { defineConfig, devices } from '@playwright/test';
import { env } from './data/env'; // adjust path if needed

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
    headless: process.env.CI ? true : false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 15000,
    navigationTimeout: 30000,
    ignoreHTTPSErrors: true,
  },

  projects: [

    // ==========================
    // UI Projects
    // ==========================

    {
      name: 'chromium',
      testIgnore: /.*api\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: env.ui.baseURL,
      },
    },

    {
      name: 'firefox',
      testIgnore: /.*api\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Firefox'],
        baseURL: env.ui.baseURL,
      },
    },

    {
      name: 'webkit',
      testIgnore: /.*api\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Safari'],
        baseURL: env.ui.baseURL,
      },
    },

    // ==========================
    // API Project
    // ==========================

    {
      name: 'api',
      testMatch: /.*api\/.*\.spec\.ts/,
      use: {
        baseURL: env.api.baseURL,
      },
    },
  ],

  outputDir: 'test-results',
});