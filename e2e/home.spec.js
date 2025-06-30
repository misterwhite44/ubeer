import { test, expect } from '@playwright/test';

test('Home page - vérifier les éléments principaux', async ({ page }) => {
  await page.goto('https://ubeer-jade.vercel.app/');

  const heroTitle = await page.getByRole('heading', { level: 2 });
  await expect(heroTitle).toHaveText('Livraison de bière à domicile en un clic !');

  const orderButton = await page.getByRole('button', { name: 'Commandez Maintenant' });
  await expect(orderButton).toBeVisible();

  console.log('Test E2E réussi : éléments principaux de la page d’accueil visibles');
});
