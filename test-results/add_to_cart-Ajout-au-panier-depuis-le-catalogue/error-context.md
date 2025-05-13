# Test info

- Name: Ajout au panier depuis le catalogue
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\add_to_cart.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/catalogue
Call log:
  - navigating to "http://localhost:3000/catalogue", waiting until "load"

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\add_to_cart.spec.js:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Ajout au panier depuis le catalogue', async ({ page }) => {
>  4 |   await page.goto('http://localhost:3000/catalogue');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/catalogue
   5 |   const addButtons = await page.locator('button:has-text("Ajouter au panier")');
   6 |   await expect(addButtons.first()).toBeVisible();
   7 |   await addButtons.first().click();
   8 |
   9 |   await page.goto('http://localhost:3000/cart');
  10 |   const cartItem = await page.locator('.cart-item h2');
  11 |   await expect(cartItem).toBeVisible();
  12 | });
  13 |
```