# Test info

- Name: Home page - vérifier les éléments principaux
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\home.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\home.spec.js:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Home page - vérifier les éléments principaux', async ({ page }) => {
>  4 |   await page.goto('http://localhost:3000/');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
   5 |
   6 |   const heroTitle = await page.getByRole('heading', { level: 2 });
   7 |   await expect(heroTitle).toHaveText('Livraison de bière à domicile en un clic !');
   8 |
   9 |   const orderButton = await page.getByRole('button', { name: 'Commandez Maintenant' });
  10 |   await expect(orderButton).toBeVisible();
  11 | });
  12 |
```