import { test, expect } from '@playwright/test';

test('Navigation et affichage du panier', async ({ page }) => {
  await page.goto('http://localhost:3000/catalogue');
  const cartIcon = await page.locator('.cart-logo a');
  await cartIcon.click();

  await expect(page).toHaveURL(/.*cart/);
  await expect(page.locator('h1')).toHaveText('Mon Panier');
});
