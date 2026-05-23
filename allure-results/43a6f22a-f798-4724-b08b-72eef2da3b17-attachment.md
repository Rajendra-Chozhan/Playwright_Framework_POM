# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User should login successfully
- Location: tests\logout.spec.js:8:1

# Error details

```
Error: page.click: selector: expected string, got object
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - button "Skip to Main Content" [ref=e7] [cursor=pointer]
    - button "Skip to Footer" [ref=e8] [cursor=pointer]
  - generic [ref=e10] [cursor=pointer]: Due to current geopolitical conditions affecting air traffic in parts of Middle East & EU region, some deliveries may experience delays as routes are being rerouted or temporarily suspended. While we are making every effort to minimize disruption however transit timelines may be impacted.
  - generic [ref=e13]:
    - link "FabIndia" [ref=e15] [cursor=pointer]:
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
      - button [ref=e33] [cursor=pointer]:
        - img [ref=e34]
      - generic "items currently in your cart" [ref=e37] [cursor=pointer]:
        - img [ref=e38]
      - link "0 items currently in your cart" [ref=e41] [cursor=pointer]:
        - /url: /cart
        - img [ref=e42]
  - generic [ref=e50]:
    - text: 
    - navigation [ref=e51]:
      - link "New Arrivals" [ref=e54] [cursor=pointer]:
        - /url: /new-arrivals
        - paragraph [ref=e55]: New Arrivals
    - navigation [ref=e56]:
      - link "Women" [ref=e59] [cursor=pointer]:
        - /url: /women
        - paragraph [ref=e60]: Women
    - navigation [ref=e61]:
      - link "Men" [ref=e64] [cursor=pointer]:
        - /url: /men
        - paragraph [ref=e65]: Men
    - navigation [ref=e66]:
      - link "Kids" [ref=e69] [cursor=pointer]:
        - /url: /kids
        - paragraph [ref=e70]: Kids
    - navigation [ref=e71]:
      - link "Home & Living" [ref=e74] [cursor=pointer]:
        - /url: /home-living
        - paragraph [ref=e75]: Home & Living
    - navigation [ref=e76]:
      - link "Furniture" [ref=e79] [cursor=pointer]:
        - /url: /furniture
        - paragraph [ref=e80]: Furniture
    - navigation [ref=e81]:
      - link "Food" [ref=e84] [cursor=pointer]:
        - /url: /food
        - paragraph [ref=e85]: Food
    - navigation [ref=e86]:
      - link "Collection" [ref=e89] [cursor=pointer]:
        - /url: /
        - paragraph [ref=e90]: Collection
    - navigation [ref=e91]:
      - link "Services" [ref=e94] [cursor=pointer]:
        - /url: /
        - paragraph [ref=e95]: Services
    - navigation [ref=e96]:
      - link "Fabfamily" [ref=e99] [cursor=pointer]:
        - /url: https://fabfamily.fabindia.com/abouttheprogram
        - paragraph [ref=e100]: Fabfamily
    - navigation [ref=e101]:
      - link "Sale" [ref=e104] [cursor=pointer]:
        - /url: /shop/sale
        - paragraph [ref=e105]: Sale
  - main [ref=e106]:
    - img [ref=e111]
  - contentinfo [ref=e126]
```

# Test source

```ts
  1  | class LoginPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  | 
  5  |         // 🔍 Locators (update if UI differs)
  6  |         this.accountIcon = page.getByRole('button', { name: 'Account' });
  7  |         this.loginButton = page.getByRole('button', { name: 'Login' });
  8  |         this.emailInput = page.getByRole('textbox', { name: 'Email' });
  9  |         this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  10 |         this.submitBtn = page.getByRole('button', { name: 'Login' });
  11 |     }
  12 | 
  13 |     async navigate(baseURL) {
  14 |         await this.page.goto(baseURL);
  15 |     }
  16 | 
  17 |     async openLoginPopup() {
> 18 |         await this.page.click(this.accountIcon);
     |                         ^ Error: page.click: selector: expected string, got object
  19 |         await this.page.click(this.loginButton);
  20 |     }
  21 | 
  22 |     async enterEmail(email) {
  23 |         await this.page.fill(this.emailInput, email);
  24 |     }
  25 | 
  26 |     async enterPassword(password) {
  27 |         await this.page.fill(this.passwordInput, password);
  28 |     }
  29 | 
  30 |     async clickLogin() {
  31 |         await this.page.click(this.submitBtn);
  32 |     }
  33 | 
  34 |     async login(email, password) {
  35 |         await this.enterEmail(email);
  36 |         await this.enterPassword(password);
  37 |         await this.clickLogin();
  38 |     }
  39 | }
  40 | 
  41 | module.exports = LoginPage;
```