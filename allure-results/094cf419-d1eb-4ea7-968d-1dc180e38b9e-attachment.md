# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User should login successfully
- Location: tests\logout.spec.js:8:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - button "Skip to Main Content" [ref=e7] [cursor=pointer]
      - button "Skip to Footer" [ref=e8] [cursor=pointer]
    - generic [ref=e10] [cursor=pointer]: Due to current geopolitical conditions affecting air traffic in parts of Middle East & EU region, some deliveries may experience delays as routes are being rerouted or temporarily suspended. While we are making every effort to minimize disruption however transit timelines may be impacted.
    - generic [ref=e13]:
      - link "FabIndia" [ref=e15]:
        - /url: /
        - img "FabIndia" [ref=e16]
      - button "India" [ref=e21] [cursor=pointer]
      - generic [ref=e24]:
        - textbox "Search" [ref=e25]:
          - /placeholder: Search here...
        - generic [ref=e26] [cursor=pointer]: 
        - text: 
      - generic [ref=e28]:
        - button [ref=e30] [cursor=pointer]
        - text:  
        - button [active] [ref=e33] [cursor=pointer]:
          - img [ref=e34]
        - generic "items currently in your cart" [ref=e37] [cursor=pointer]:
          - img [ref=e38]
        - link "0 items currently in your cart" [ref=e41]:
          - /url: /cart
          - img [ref=e42]
    - main [ref=e44]
    - contentinfo [ref=e47]:
      - generic [ref=e51]: © Copyright 2026 Fabindia.com. All rights reserved.
  - link "WhatsApp Icon" [ref=e53]:
    - /url: https://wa.me/919650600273?text=hi
    - img "WhatsApp Icon" [ref=e54]
```

# Test source

```ts
  1  | class LoginPage {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page;
  6  | 
  7  |         // Locators
  8  | this.accountIcon = page.locator("app-fab-login-slot button");
  9  | 
  10 |         this.loginButton = page.getByRole('button', { name: 'Login' });
  11 | 
  12 |         this.emailInput = page.getByRole('textbox', { name: 'Email' });
  13 | 
  14 |         this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  15 | 
  16 |         this.submitBtn = page.locator("#send-otp")
  17 |     }
  18 | 
  19 |     async navigate(baseURL) {
  20 |         await this.page.goto(baseURL);
  21 |     }
  22 | 
  23 |     async openLoginPopup() {
  24 | 
  25 |         await this.accountIcon.click();
  26 | 
> 27 |         await this.loginButton.click();
     |                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |     }
  29 | 
  30 |     async enterEmail(email) {
  31 | 
  32 |         await this.emailInput.fill(email);
  33 |     }
  34 | 
  35 |     async enterPassword(password) {
  36 | 
  37 |         await this.passwordInput.fill(password);
  38 |     }
  39 | 
  40 |     async clickLogin() {
  41 | 
  42 |         await this.submitBtn.click();
  43 |     }
  44 | 
  45 |     async login(email, password) {
  46 | 
  47 |         await this.enterEmail(email);
  48 | 
  49 |         await this.enterPassword(password);
  50 | 
  51 |         await this.clickLogin();
  52 |     }
  53 | }
  54 | 
  55 | module.exports = LoginPage;
```