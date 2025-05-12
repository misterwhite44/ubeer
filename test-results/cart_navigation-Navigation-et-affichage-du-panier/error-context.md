# Test info

- Name: Navigation et affichage du panier
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\cart_navigation.spec.js:3:5

# Error details

```
Error: expect.toHaveText: Error: strict mode violation: locator('h1') resolved to 2 elements:
    1) <h1>Ubeers</h1> aka getByRole('heading', { name: 'Ubeers' })
    2) <h1>Mon Panier</h1> aka getByRole('heading', { name: 'Mon Panier' })

Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('h1')

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\cart_navigation.spec.js:9:36
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
- heading "Mon Panier" [level=1]
- paragraph:
  - text: Votre panier est vide.
  - link "Retour au catalogue":
    - /url: /
- contentinfo:
  - paragraph: © 2024 Bière Express - Tous droits réservés
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Navigation et affichage du panier', async ({ page }) => {
   4 |   await page.goto('http://localhost:3000/catalogue');
   5 |   const cartIcon = await page.locator('.cart-logo a');
   6 |   await cartIcon.click();
   7 |
   8 |   await expect(page).toHaveURL(/.*cart/);
>  9 |   await expect(page.locator('h1')).toHaveText('Mon Panier');
     |                                    ^ Error: expect.toHaveText: Error: strict mode violation: locator('h1') resolved to 2 elements:
  10 | });
  11 |
```