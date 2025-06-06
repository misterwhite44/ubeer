import { test, expect } from '@playwright/test';

test('Navigation et affichage du panier', async ({ page }) => {
  await page.goto('http://localhost:3000/catalogue');
  const cartIcon = page.locator('.cart-logo a');
  await cartIcon.click();

  await expect(page).toHaveURL(/.*cart/);
  await expect(page.getByRole('heading', { level: 1, name: 'Mon Panier' })).toBeVisible();

  console.log('Test E2E réussi : navigation et affichage du panier');
});
