import { test, expect } from '@playwright/test';

test('Accès au profil utilisateur', async ({ page }) => {
  await page.goto('http://localhost:3000/userProfile');
  const loading = await page.locator('text=Loading');
  if (await loading.isVisible()) {
    await expect(loading).toBeVisible();
  } else {
    await expect(page.locator('h2')).toBeVisible(); // user name
    await expect(page.locator('p')).toBeVisible(); // user email
  }
});
