# Test info

- Name: Navigation et affichage du panier
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\cart_navigation.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/catalogue
Call log:
  - navigating to "http://localhost:3000/catalogue", waiting until "load"

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\cart_navigation.spec.js:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Navigation et affichage du panier', async ({ page }) => {
>  4 |   await page.goto('http://localhost:3000/catalogue');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/catalogue
   5 |   const cartIcon = await page.locator('.cart-logo a');
   6 |   await cartIcon.click();
   7 |
   8 |   await expect(page).toHaveURL(/.*cart/);
   9 |   await expect(page.locator('h1')).toHaveText('Mon Panier');
  10 | });
  11 |
```