# Test info

- Name: Accès au profil utilisateur
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\profile_check.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('h2')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('h2')

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\profile_check.spec.js:9:38
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
- contentinfo:
  - paragraph: © 2024 Bière Express - Tous droits réservés
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Accès au profil utilisateur', async ({ page }) => {
   4 |   await page.goto('http://localhost:3000/userProfile');
   5 |   const loading = await page.locator('text=Loading');
   6 |   if (await loading.isVisible()) {
   7 |     await expect(loading).toBeVisible();
   8 |   } else {
>  9 |     await expect(page.locator('h2')).toBeVisible(); // user name
     |                                      ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  10 |     await expect(page.locator('p')).toBeVisible(); // user email
  11 |   }
  12 | });
  13 |
```