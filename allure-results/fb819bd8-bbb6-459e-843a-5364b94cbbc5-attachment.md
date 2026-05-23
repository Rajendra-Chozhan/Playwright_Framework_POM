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

```
Tearing down "context" exceeded the test timeout of 30000ms.
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
    - main [ref=e44]:
      - generic [ref=e48]:
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
              - link "Forgot password?" [ref=e65] [cursor=pointer]:
                - /url: /login/forgot-password
              - button "Login" [ref=e67] [cursor=pointer]
          - generic [ref=e69]: Or
          - button "Login/Signup using OTP" [ref=e71] [cursor=pointer]
        - generic [ref=e75]:
          - iframe [ref=e76]:
            - button "Continue with Google. Opens in new tab" [ref=f1e3] [cursor=pointer]:
              - generic [ref=f1e5]:
                - img [ref=f1e7]
                - generic [ref=f1e14]: Continue with Google
          - button "Sign in with Google. Opens in new tab" [ref=e77] [cursor=pointer]
    - contentinfo [ref=e78]:
      - generic [ref=e80]:
        - generic [ref=e82]:
          - navigation [ref=e83]:
            - generic [ref=e84]: Let Us Help You
            - generic [ref=e86]:
              - navigation [ref=e87]:
                - link "Order Tracking" [ref=e89] [cursor=pointer]:
                  - /url: /track-your-order
              - navigation [ref=e90]:
                - link "Bulk Orders" [ref=e92] [cursor=pointer]:
                  - /url: /bulk-orders
              - navigation [ref=e93]:
                - link "Store Locator" [ref=e95] [cursor=pointer]:
                  - /url: /store-finder
              - navigation [ref=e96]:
                - link "Furniture Warranty Policy" [ref=e98] [cursor=pointer]:
                  - /url: /furniture-warranty-policy
              - navigation [ref=e99]:
                - link "Gift Card" [ref=e101] [cursor=pointer]:
                  - /url: /giftcard
              - navigation [ref=e102]:
                - link "Franchise Enquiry Form" [ref=e104] [cursor=pointer]:
                  - /url: /franchise
              - navigation [ref=e105]:
                - link "Interior Design Studio" [ref=e107] [cursor=pointer]:
                  - /url: /interior-designpage
          - navigation [ref=e108]:
            - generic [ref=e109]: Support
            - generic [ref=e111]:
              - navigation [ref=e112]:
                - link "Customer Service" [ref=e114] [cursor=pointer]:
                  - /url: /customer-service
              - navigation [ref=e115]:
                - link "How To Order" [ref=e117] [cursor=pointer]:
                  - /url: /how-to-order
              - navigation [ref=e118]:
                - link "Billing & Payments" [ref=e120] [cursor=pointer]:
                  - /url: /billing-payment
              - navigation [ref=e121]:
                - link "Shipping & Delivery" [ref=e123] [cursor=pointer]:
                  - /url: /shipping-delivery
              - navigation [ref=e124]:
                - link "Return & Exchanges" [ref=e126] [cursor=pointer]:
                  - /url: /return-exchange
              - navigation [ref=e127]:
                - link "FAQs" [ref=e129] [cursor=pointer]:
                  - /url: /faqs
          - navigation [ref=e130]:
            - generic [ref=e131]: Company
            - generic [ref=e133]:
              - navigation [ref=e134]:
                - link "Investor Relations" [ref=e136] [cursor=pointer]:
                  - /url: /ir/board-of-directors
              - navigation [ref=e137]:
                - link "Contact Us" [ref=e139] [cursor=pointer]:
                  - /url: /contact-us
              - navigation [ref=e140]:
                - link "In The News" [ref=e142] [cursor=pointer]:
                  - /url: /ir/inthenews
              - navigation [ref=e143]:
                - link "Careers" [ref=e145] [cursor=pointer]:
                  - /url: /careers
              - navigation [ref=e146]:
                - link "Terms Of Use" [ref=e148] [cursor=pointer]:
                  - /url: /term-of-use
              - navigation [ref=e149]:
                - link "Privacy Policy" [ref=e151] [cursor=pointer]:
                  - /url: /privacy-policy
          - navigation [ref=e152]:
            - generic [ref=e153]: About Fabindia
            - generic [ref=e155]:
              - navigation [ref=e156]:
                - link "65 years of Fabindia" [ref=e158] [cursor=pointer]:
                  - /url: /60-years-of-fabindia
              - navigation [ref=e159]:
                - link "Philosophy" [ref=e161] [cursor=pointer]:
                  - /url: /philosophy
              - navigation [ref=e162]:
                - link "Organic Certification" [ref=e164] [cursor=pointer]:
                  - /url: /organic-certification
              - navigation [ref=e165]:
                - link "The Fabindia School" [ref=e167] [cursor=pointer]:
                  - /url: /fabindia-schools
              - navigation [ref=e168]:
                - link "About Us" [ref=e170] [cursor=pointer]:
                  - /url: /about-us
              - navigation [ref=e171]:
                - link "Fabfamily" [ref=e173] [cursor=pointer]:
                  - /url: https://fabfamily.fabindia.com/abouttheprogram
              - navigation [ref=e174]:
                - link "Blog" [ref=e176] [cursor=pointer]:
                  - /url: https://blog.fabindia.com/
        - generic [ref=e177]:
          - paragraph [ref=e178]: Follow Us
          - generic [ref=e179]:
            - link [ref=e180] [cursor=pointer]:
              - /url: https://m.facebook.com/Fabindia
              - img [ref=e181]
            - link [ref=e183] [cursor=pointer]:
              - /url: https://twitter.com/FabindiaNews
              - img [ref=e184]
            - link [ref=e186] [cursor=pointer]:
              - /url: https://www.instagram.com/fabindiaofficial
              - img [ref=e187]
            - link [ref=e189] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/fabindia-overseas-pvt-ltd
              - img [ref=e190]
            - link [ref=e192] [cursor=pointer]:
              - /url: https://www.youtube.com/c/FabindiaNews
              - img [ref=e193]
        - generic [ref=e195]:
          - paragraph [ref=e196]: Our Largest Store At Your Fingertips
          - generic [ref=e197]:
            - link "undefined" [ref=e198] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=com.fabindia.shopping
              - img "undefined" [ref=e201]
            - link "undefined" [ref=e202] [cursor=pointer]:
              - /url: https://apps.apple.com/us/app/fabindia-online-shopping/id1479713062
              - img "undefined" [ref=e205]
        - generic [ref=e207]: © Copyright 2026 Fabindia.com. All rights reserved.
  - link "WhatsApp Icon" [ref=e209] [cursor=pointer]:
    - /url: https://wa.me/919650600273?text=hi
    - img "WhatsApp Icon" [ref=e210]
```