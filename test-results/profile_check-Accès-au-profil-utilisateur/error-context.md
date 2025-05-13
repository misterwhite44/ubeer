# Test info

- Name: Accès au profil utilisateur
- Location: C:\Users\Client\Documents\CoursB3\ubeer\e2e\profile_check.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/userProfile
Call log:
  - navigating to "http://localhost:3000/userProfile", waiting until "load"

    at C:\Users\Client\Documents\CoursB3\ubeer\e2e\profile_check.spec.js:4:14
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('Accès au profil utilisateur', async ({ page }) => {
>  4 |   await page.goto('http://localhost:3000/userProfile');
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/userProfile
   5 |   const loading = await page.locator('text=Loading');
   6 |   if (await loading.isVisible()) {
   7 |     await expect(loading).toBeVisible();
   8 |   } else {
   9 |     await expect(page.locator('h2')).toBeVisible(); // user name
  10 |     await expect(page.locator('p')).toBeVisible(); // user email
  11 |   }
  12 | });
  13 |
```