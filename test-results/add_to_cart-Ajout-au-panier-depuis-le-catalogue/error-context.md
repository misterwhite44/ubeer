# Test info

- Name: Ajout au panier depuis le catalogue
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\add_to_cart.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('button:has-text("Ajouter au panier")').first()
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('button:has-text("Ajouter au panier")').first()

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\add_to_cart.spec.js:6:36
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
   3 | test('Ajout au panier depuis le catalogue', async ({ page }) => {
   4 |   await page.goto('http://localhost:3000/catalogue');
   5 |   const addButtons = await page.locator('button:has-text("Ajouter au panier")');
>  6 |   await expect(addButtons.first()).toBeVisible();
     |                                    ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   7 |   await addButtons.first().click();
   8 |
   9 |   await page.goto('http://localhost:3000/cart');
  10 |   const cartItem = await page.locator('.cart-item h2');
  11 |   await expect(cartItem).toBeVisible();
  12 | });
  13 |
```