import { test, expect } from '@playwright/test';

test('Ajout au panier depuis le catalogue', async ({ page }) => {
  await page.goto('https://ubeer-jade.vercel.app/catalogue');
  const addButtons = page.locator('button:has-text("Ajouter au panier")');
  await expect(addButtons.first()).toBeVisible();
  await addButtons.first().click();

  await page.goto('https://ubeer-jade.vercel.app/cart');
  const cartItem = page.locator('.cart-item h2');
  await expect(cartItem).toBeVisible();

  console.log('Test E2E réussi : ajout au panier depuis le catalogue');
});
