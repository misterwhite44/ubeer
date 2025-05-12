# Test info

- Name: Parcours de commande depuis le panier
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\complete_order.spec.js:3:5

# Error details

```
Error: locator.click: Test timeout of 10000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Ajouter au panier")').first()

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\complete_order.spec.js:5:70
```

# Page snapshot

```yaml
- banner:
  - heading "Ubeers" [level=1]
  - navigation:
    - list:
      - listitem:
        - link "Accueil":
          - /url: /home
      - listitem:
        - link "Catalogue":
          - /url: /catalogue
      - listitem:
        - link "Brasseries":
          - /url: /breweries
      - listitem:
        - link "Connexion":
          - /url: /login
      - listitem:
        - link "Profil":
          - /url: /userProfile
- navigation:
  - heading "Notre Catalogue de Bières" [level=1]
  - button "Ajouter une bière"
  - link "0":
    - /url: /cart
    - img
    - text: "0"
- paragraph: Failed to fetch
- text: "Filtrer par brasserie :"
- combobox "Filtrer par brasserie :":
  - option "Toutes les brasseries" [selected]
- contentinfo:
  - paragraph: © 2024 Bière Express - Tous droits réservés
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Parcours de commande depuis le panier', async ({ page }) => {
   4 |   await page.goto('http://localhost:3000/catalogue');
>  5 |   await page.locator('button:has-text("Ajouter au panier")').first().click();
     |                                                                      ^ Error: locator.click: Test timeout of 10000ms exceeded.
   6 |   await page.goto('http://localhost:3000/cart');
   7 |   await page.locator('button:has-text("Commander")').click();
   8 |
   9 |   await expect(page).toHaveURL(/.*order/);
  10 |   await expect(page.locator('h1')).toHaveText('Passer une commande');
  11 | });
  12 |
```