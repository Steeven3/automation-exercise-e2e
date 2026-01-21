import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    baseURL: 'https://automationexercise.com',
    screenshot: 'only-on-failure'
  }
});
