# Test info

- Name: Parcours de commande depuis le panier
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\complete_order.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/catalogue
Call log:
  - navigating to "http://localhost:3000/catalogue", waiting until "load"

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\complete_order.spec.js:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Parcours de commande depuis le panier', async ({ page }) => {
>  4 |   await page.goto('http://localhost:3000/catalogue');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/catalogue
   5 |   await page.locator('button:has-text("Ajouter au panier")').first().click();
   6 |   await page.goto('http://localhost:3000/cart');
   7 |   await page.locator('button:has-text("Commander")').click();
   8 |
   9 |   await expect(page).toHaveURL(/.*order/);
  10 |   await expect(page.locator('h1')).toHaveText('Passer une commande');
  11 | });
  12 |
```