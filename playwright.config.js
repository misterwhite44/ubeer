import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 20000,
  expect: {
    timeout: 20000
  },
  use: {
    baseURL: 'https://ubeer-jade.vercel.app',
    headless: true,
    ignoreHTTPSErrors: true
  }
});
