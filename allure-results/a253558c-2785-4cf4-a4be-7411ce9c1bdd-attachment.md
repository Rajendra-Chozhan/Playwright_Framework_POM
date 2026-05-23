# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User should login successfully
- Location: tests\logout.spec.js:8:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Login' }) resolved to 2 elements:
    1) <button id="send-otp" _ngcontent-ng-c621661244="" class="btn btn-primary mt-sm-4 w-100 border-0 send-otp"> Login </button> aka getByRole('button', { name: 'Login', exact: true })
    2) <button _ngcontent-ng-c621661244="" class="login_password login-with-email-sep underline-hover">Login/Signup using OTP</button> aka getByRole('button', { name: 'Login/Signup using OTP' })

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
        - button [ref=e33] [cursor=pointer]:
          - img [ref=e34]
        - generic "items currently in your cart" [ref=e37] [cursor=pointer]:
          - img [ref=e38]
        - link "0 items currently in your cart" [ref=e41]:
          - /url: /cart
          - img [ref=e42]
    - main [ref=e44]:
      - generic [ref=e50]:
        - img [ref=e51]
        - img [ref=e52]
        - generic [ref=e53]:
          - generic [ref=e55]: Login
          - generic [ref=e56]:
            - generic [ref=e57]:
              - textbox "Email address*" [ref=e58]:
                - /placeholder: Enter Email Address
                - text: rajchozhan024@gmail.com
              - generic: Email address*
              - alert [ref=e59]
            - generic [ref=e60]:
              - textbox "Password" [active] [ref=e61]:
                - /placeholder: Enter Your Password
                - text: Chola@761645
              - generic [ref=e63]: 
              - generic: Password
              - alert [ref=e64]
            - link "Forgot password?" [ref=e65]:
              - /url: /login/forgot-password
            - button "Login" [ref=e67] [cursor=pointer]
        - generic [ref=e69]: Or
        - button "Login/Signup using OTP" [ref=e71] [cursor=pointer]
    - contentinfo [ref=e73]:
      - generic [ref=e75]:
        - generic [ref=e77]:
          - navigation [ref=e78]:
            - generic [ref=e79]: Let Us Help You
            - generic [ref=e81]:
              - navigation [ref=e82]:
                - link "Order Tracking" [ref=e84]:
                  - /url: /track-your-order
              - navigation [ref=e85]:
                - link "Bulk Orders" [ref=e87]:
                  - /url: /bulk-orders
              - navigation [ref=e88]:
                - link "Store Locator" [ref=e90]:
                  - /url: /store-finder
              - navigation [ref=e91]:
                - link "Furniture Warranty Policy" [ref=e93]:
                  - /url: /furniture-warranty-policy
              - navigation [ref=e94]:
                - link "Gift Card" [ref=e96]:
                  - /url: /giftcard
              - navigation [ref=e97]:
                - link "Franchise Enquiry Form" [ref=e99]:
                  - /url: /franchise
              - navigation [ref=e100]:
                - link "Interior Design Studio" [ref=e102]:
                  - /url: /interior-designpage
          - navigation [ref=e103]:
            - generic [ref=e104]: Support
            - generic [ref=e106]:
              - navigation [ref=e107]:
                - link "Customer Service" [ref=e109]:
                  - /url: /customer-service
              - navigation [ref=e110]:
                - link "How To Order" [ref=e112]:
                  - /url: /how-to-order
              - navigation [ref=e113]:
                - link "Billing & Payments" [ref=e115]:
                  - /url: /billing-payment
              - navigation [ref=e116]:
                - link "Shipping & Delivery" [ref=e118]:
                  - /url: /shipping-delivery
              - navigation [ref=e119]:
                - link "Return & Exchanges" [ref=e121]:
                  - /url: /return-exchange
              - navigation [ref=e122]:
                - link "FAQs" [ref=e124]:
                  - /url: /faqs
          - navigation [ref=e125]:
            - generic [ref=e126]: Company
            - generic [ref=e128]:
              - navigation [ref=e129]:
                - link "Investor Relations" [ref=e131]:
                  - /url: /ir/board-of-directors
              - navigation [ref=e132]:
                - link "Contact Us" [ref=e134]:
                  - /url: /contact-us
              - navigation [ref=e135]:
                - link "In The News" [ref=e137]:
                  - /url: /ir/inthenews
              - navigation [ref=e138]:
                - link "Careers" [ref=e140]:
                  - /url: /careers
              - navigation [ref=e141]:
                - link "Terms Of Use" [ref=e143]:
                  - /url: /term-of-use
              - navigation [ref=e144]:
                - link "Privacy Policy" [ref=e146]:
                  - /url: /privacy-policy
          - navigation [ref=e147]:
            - generic [ref=e148]: About Fabindia
            - generic [ref=e150]:
              - navigation [ref=e151]:
                - link "65 years of Fabindia" [ref=e153]:
                  - /url: /60-years-of-fabindia
              - navigation [ref=e154]:
                - link "Philosophy" [ref=e156]:
                  - /url: /philosophy
              - navigation [ref=e157]:
                - link "Organic Certification" [ref=e159]:
                  - /url: /organic-certification
              - navigation [ref=e160]:
                - link "The Fabindia School" [ref=e162]:
                  - /url: /fabindia-schools
              - navigation [ref=e163]:
                - link "About Us" [ref=e165]:
                  - /url: /about-us
              - navigation [ref=e166]:
                - link "Fabfamily" [ref=e168]:
                  - /url: https://fabfamily.fabindia.com/abouttheprogram
              - navigation [ref=e169]:
                - link "Blog" [ref=e171]:
                  - /url: https://blog.fabindia.com/
        - generic [ref=e172]:
          - paragraph [ref=e173]: Follow Us
          - generic [ref=e174]:
            - link [ref=e175]:
              - /url: https://m.facebook.com/Fabindia
              - img [ref=e176]
            - link [ref=e178]:
              - /url: https://twitter.com/FabindiaNews
              - img [ref=e179]
            - link [ref=e181]:
              - /url: https://www.instagram.com/fabindiaofficial
              - img [ref=e182]
            - link [ref=e184]:
              - /url: https://www.linkedin.com/company/fabindia-overseas-pvt-ltd
              - img [ref=e185]
            - link [ref=e187]:
              - /url: https://www.youtube.com/c/FabindiaNews
              - img [ref=e188]
        - generic [ref=e190]:
          - paragraph [ref=e191]: Our Largest Store At Your Fingertips
          - generic [ref=e192]:
            - link "undefined" [ref=e193]:
              - /url: https://play.google.com/store/apps/details?id=com.fabindia.shopping
              - img "undefined" [ref=e196]
            - link "undefined" [ref=e197]:
              - /url: https://apps.apple.com/us/app/fabindia-online-shopping/id1479713062
              - img "undefined" [ref=e200]
        - generic [ref=e202]: © Copyright 2026 Fabindia.com. All rights reserved.
  - link "WhatsApp Icon" [ref=e204]:
    - /url: https://wa.me/919650600273?text=hi
    - img "WhatsApp Icon" [ref=e205]
  - iframe [ref=e206]:
    - generic [ref=f6e2]:
      - img "Logo" [ref=f6e3]
      - paragraph [ref=f6e4]: www.fabindia.com wants to send web push notifications to you.
      - generic [ref=f6e5]:
        - button "Not Now" [ref=f6e6]
        - button "Allow" [ref=f6e7]
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
  16 |         this.submitBtn = page.getByRole('button', { name: 'Login' });
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
  27 |         await this.loginButton.click();
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
> 42 |         await this.submitBtn.click();
     |                              ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Login' }) resolved to 2 elements:
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