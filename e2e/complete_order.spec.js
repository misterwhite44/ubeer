import { test, expect } from '@playwright/test';

test('Parcours de commande depuis le panier', async ({ page }) => {
  await page.goto('https://ubeer-jade.vercel.app/catalogue');
  await page.locator('button:has-text("Ajouter au panier")').first().click();
  await page.goto('https://ubeer-jade.vercel.app/cart');
  await page.locator('button:has-text("Commander")').click();

  await expect(page).toHaveURL(/.*order/);
  await expect(page.getByRole('heading', { level: 1, name: 'Passer une commande' })).toBeVisible();

  console.log('Test E2E réussi : parcours de commande depuis le panier');
});
