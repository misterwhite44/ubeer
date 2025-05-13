import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 20000,
  expect: {
    timeout: 20000
  },
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    ignoreHTTPSErrors: true
  }
});
