import { test, expect } from '@playwright/test';

test('Parcours de commande depuis le panier', async ({ page }) => {
  await page.goto('http://localhost:3000/catalogue');
  await page.locator('button:has-text("Ajouter au panier")').first().click();
  await page.goto('http://localhost:3000/cart');
  await page.locator('button:has-text("Commander")').click();

  await expect(page).toHaveURL(/.*order/);
  await expect(page.locator('h1')).toHaveText('Passer une commande');
});
