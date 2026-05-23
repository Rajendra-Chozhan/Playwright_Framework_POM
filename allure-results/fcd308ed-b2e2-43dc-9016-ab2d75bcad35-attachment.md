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
  - waiting for getByRole('button', { name: 'Account' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e107]:
        - generic [ref=e111]:
          - link "Wedding Collection" [ref=e116] [cursor=pointer]:
            - /url: /collection/wedding-clothing?promoname=Wedding%20Collection&promoID=homemainBanner5
            - img "Wedding Collection" [ref=e118]
          - generic [ref=e119]:
            - button "Slide 1" [ref=e120] [cursor=pointer]
            - button "Slide 1" [ref=e121] [cursor=pointer]
            - button "Slide 1" [ref=e122] [cursor=pointer]
            - button "Slide 1" [ref=e123] [cursor=pointer]
            - button "Slide 1" [ref=e124] [cursor=pointer]
            - button "Slide 1" [ref=e125] [cursor=pointer]
          - button "" [ref=e126] [cursor=pointer]:
            - generic [ref=e127]: 
          - button "" [ref=e128] [cursor=pointer]:
            - generic [ref=e129]: 
        - generic [ref=e134]:
          - paragraph [ref=e137]: Fantastic Finds
          - generic [ref=e142]:
            - listbox [ref=e143]:
              - generic [ref=e145]:
                - link "Womens Kurtas" [ref=e149] [cursor=pointer]:
                  - /url: /clothing/women-kurtas?query=:creationtime-desc:allCategories:women-kurtas:priceAfterDiscount:%E2%82%B90-%E2%82%B9999:priceAfterDiscount:%E2%82%B91000-%E2%82%B91,999&promoname=Womens%20Kurtas&promoID=FabHomepageSection3ImagesComponent2
                  - img "Womens Kurtas" [ref=e151]
                - button
              - generic [ref=e153]:
                - link "Men Kurtas" [ref=e157] [cursor=pointer]:
                  - /url: /clothing/men-kurtas?query=:creationtime-desc:allCategories:men-kurtas:priceAfterDiscount:%E2%82%B90-%E2%82%B9999:priceAfterDiscount:%E2%82%B91000-%E2%82%B91,999&promoname=Men%20Kurtas&promoID=FabHomepageSection3ImagesComponent3
                  - img "Men Kurtas" [ref=e159]
                - button
              - generic [ref=e161]:
                - link "Furniture" [ref=e165] [cursor=pointer]:
                  - /url: /shop/furniture?query=:creationtime-desc:allCategories:furniture:priceAfterDiscount:%E2%82%B92000-%E2%82%B92,999:priceAfterDiscount:%E2%82%B93000-%E2%82%B93,999:priceAfterDiscount:%E2%82%B94000-%E2%82%B94,999:priceAfterDiscount:%E2%82%B95000-%E2%82%B96,999:priceAfterDiscount:%E2%82%B97000-%E2%82%B99,999&promoname=Furniture&promoID=FabHomepageSection3ImagesComponent4
                  - img "Furniture" [ref=e167]
                - button
              - generic [ref=e169]:
                - link "Kidswear" [ref=e173] [cursor=pointer]:
                  - /url: /shop/kids-products?query=:creationtime-desc:allCategories:kids-products:priceAfterDiscount:%E2%82%B90-%E2%82%B9999:priceAfterDiscount:%E2%82%B91000-%E2%82%B91,999&promoname=Kidswear&promoID=FabHomepageSection3ImagesComponent5
                  - img "Kidswear" [ref=e175]
                - button
              - generic [ref=e177]:
                - link "Womens Western Wear" [ref=e181] [cursor=pointer]:
                  - /url: /clothing/women-western-wear?query=:creationtime-desc:allCategories:women-western-wear:priceAfterDiscount:%E2%82%B90-%E2%82%B9999&promoname=Womens%20Western%20Wear&promoID=FabHomepageSection3ImagesComponent6
                  - img "Womens Western Wear" [ref=e183]
                - button
              - generic [ref=e185]:
                - link "Mens Shirts and Pants" [ref=e189] [cursor=pointer]:
                  - /url: /clothing/men-western-wear?query=:creationtime-desc:allCategories:men-western-wear:category:shirts:category:pants:priceAfterDiscount:%E2%82%B90-%E2%82%B9999:priceAfterDiscount:%E2%82%B91000-%E2%82%B91,999&promoname=Mens%20Shirts%20and%20Pants&promoID=FabHomepageSection3ImagesComponent7
                  - img "Mens Shirts and Pants" [ref=e191]
                - button
              - generic [ref=e193]:
                - link "Home & Living" [ref=e197] [cursor=pointer]:
                  - /url: /shop/home-living?query=:creationtime-desc:allCategories:home-living:priceAfterDiscount:%E2%82%B90-%E2%82%B9999&promoname=Home%20%26%20Living&promoID=FabHomepageSection3ImagesComponent8
                  - img "Home & Living" [ref=e199]
                - button
            - button "" [ref=e200] [cursor=pointer]:
              - generic [ref=e201]: 
            - button "" [ref=e202] [cursor=pointer]:
              - generic [ref=e203]: 
        - generic [ref=e208]:
          - link "Bed Linen" [ref=e213] [cursor=pointer]:
            - /url: /home/bed-linen?promoname=Bed%20Linen&promoID=FabHomepageSection4BannerComponent1
            - img "Bed Linen" [ref=e215]
          - link "Men's Bush Shirts" [ref=e220] [cursor=pointer]:
            - /url: /search?query=Bush%20shirt&promoname=Men's%20Bush%20Shirts&promoID=FabHomepageSection4BannerComponent2
            - img "Men's Bush Shirts" [ref=e222]
        - generic [ref=e225]:
          - paragraph [ref=e227]: Recommended For You
          - generic [ref=e231]:
            - generic [ref=e233]:
              - generic [ref=e234]:
                - link:
                  - /url: /white-cotton-full-length-churidar-10738325
                - generic [ref=e236]:
                  - link "Beige Cotton Full Length Churidar" [ref=e237] [cursor=pointer]:
                    - /url: /white-cotton-full-length-churidar-10738325
                    - img "Beige Cotton Full Length Churidar" [ref=e239]
                  - generic [ref=e240]:
                    - link "Beige Cotton Full Length Churidar" [ref=e241] [cursor=pointer]:
                      - /url: /white-cotton-full-length-churidar-10738325
                      - paragraph [ref=e242]: Beige Cotton Full Length Churidar
                    - paragraph [ref=e243]:
                      - generic [ref=e244]: ₹300
                      - text: M.R.P.
                      - deletion [ref=e245]: ₹599
                      - insertion [ref=e246]: 50% off
              - generic [ref=e247]:
                - link:
                  - /url: /wine-ameera-cotton-printed-single-bed-sheet-with-1-pillow-cover-10738798
                - generic [ref=e249]:
                  - link "Wine Ameera Cotton Printed Single Bed Sheet With 1 Pillow Cover" [ref=e250] [cursor=pointer]:
                    - /url: /wine-ameera-cotton-printed-single-bed-sheet-with-1-pillow-cover-10738798
                    - img "Wine Ameera Cotton Printed Single Bed Sheet With 1 Pillow Cover" [ref=e252]
                  - generic [ref=e253]:
                    - link "Wine Ameera Cotton Printed Single Bed Sheet With 1 Pillow Cover" [ref=e254] [cursor=pointer]:
                      - /url: /wine-ameera-cotton-printed-single-bed-sheet-with-1-pillow-cover-10738798
                      - paragraph [ref=e255]: Wine Ameera Cotton Printed Single Bed Sheet With 1 Pillow Cover
                    - paragraph [ref=e256]:
                      - generic [ref=e257]: ₹1,250
                      - text: M.R.P.
                      - deletion [ref=e258]: ₹2,499
                      - insertion [ref=e259]: 50% off
              - generic [ref=e260]:
                - link:
                  - /url: /natural-cotton-hand-block-printed-slim-fit-long-kurta-20295151
                - generic [ref=e262]:
                  - link "Natural Cotton Hand Block Print Slim Fit Long Kurta" [ref=e263] [cursor=pointer]:
                    - /url: /natural-cotton-hand-block-printed-slim-fit-long-kurta-20295151
                    - img "Natural Cotton Hand Block Print Slim Fit Long Kurta" [ref=e265]
                  - generic [ref=e266]:
                    - link "Natural Cotton Hand Block Print Slim Fit Long Kurta" [ref=e267] [cursor=pointer]:
                      - /url: /natural-cotton-hand-block-printed-slim-fit-long-kurta-20295151
                      - paragraph [ref=e268]: Natural Cotton Hand Block Print Slim Fit Long Kurta
                    - paragraph [ref=e269]:
                      - text: M.R.P.
                      - generic [ref=e270]: ₹2,499
              - generic [ref=e271]:
                - link:
                  - /url: /orange-cotton-chikankari-slim-fit-long-kurta-20253827
                - generic [ref=e273]:
                  - link "Orange Cotton Chikankari Slim Fit Long Kurta" [ref=e274] [cursor=pointer]:
                    - /url: /orange-cotton-chikankari-slim-fit-long-kurta-20253827
                    - img "Orange Cotton Chikankari Slim Fit Long Kurta" [ref=e276]
                  - generic [ref=e277]:
                    - link "Orange Cotton Chikankari Slim Fit Long Kurta" [ref=e278] [cursor=pointer]:
                      - /url: /orange-cotton-chikankari-slim-fit-long-kurta-20253827
                      - paragraph [ref=e279]: Orange Cotton Chikankari Slim Fit Long Kurta
                    - paragraph [ref=e280]:
                      - text: M.R.P.
                      - generic [ref=e281]: ₹4,499
              - generic [ref=e282]:
                - link:
                  - /url: /red-cotton-hand-block-printed-maxi-20270756
                - generic [ref=e284]:
                  - link "Red Cotton Hand Block Printed Maxi" [ref=e285] [cursor=pointer]:
                    - /url: /red-cotton-hand-block-printed-maxi-20270756
                    - img "Red Cotton Hand Block Printed Maxi" [ref=e287]
                  - generic [ref=e288]:
                    - link "Red Cotton Hand Block Printed Maxi" [ref=e289] [cursor=pointer]:
                      - /url: /red-cotton-hand-block-printed-maxi-20270756
                      - paragraph [ref=e290]: Red Cotton Hand Block Printed Maxi
                    - paragraph [ref=e291]:
                      - text: M.R.P.
                      - generic [ref=e292]: ₹3,499
              - generic [ref=e293]:
                - link:
                  - /url: /mustard-cotton-hand-block-print-slim-fit-short-kurta-20292856
                - generic [ref=e295]:
                  - link "Mustard Cotton Hand Block Print Slim Fit Short Kurta" [ref=e296] [cursor=pointer]:
                    - /url: /mustard-cotton-hand-block-print-slim-fit-short-kurta-20292856
                    - img "Mustard Cotton Hand Block Print Slim Fit Short Kurta" [ref=e298]
                  - generic [ref=e299]:
                    - link "Mustard Cotton Hand Block Print Slim Fit Short Kurta" [ref=e300] [cursor=pointer]:
                      - /url: /mustard-cotton-hand-block-print-slim-fit-short-kurta-20292856
                      - paragraph [ref=e301]: Mustard Cotton Hand Block Print Slim Fit Short Kurta
                    - paragraph [ref=e302]:
                      - text: M.R.P.
                      - generic [ref=e303]: ₹1,699
              - generic [ref=e304]:
                - link:
                  - /url: /black-cotton-long-kurta-20295338
                - generic [ref=e306]:
                  - link "Maroon Cotton Long Kurta" [ref=e307] [cursor=pointer]:
                    - /url: /black-cotton-long-kurta-20295338
                    - img "Maroon Cotton Long Kurta" [ref=e309]
                  - generic [ref=e310]:
                    - link "Maroon Cotton Long Kurta" [ref=e311] [cursor=pointer]:
                      - /url: /black-cotton-long-kurta-20295338
                      - paragraph [ref=e312]: Maroon Cotton Long Kurta
                    - paragraph [ref=e313]:
                      - text: M.R.P.
                      - generic [ref=e314]: ₹1,599
              - generic [ref=e315]:
                - link:
                  - /url: /indigo-cotton-hand-block-print-sari-20274224
                - generic [ref=e317]:
                  - link "Indigo Cotton Hand Block Print Sari" [ref=e318] [cursor=pointer]:
                    - /url: /indigo-cotton-hand-block-print-sari-20274224
                    - img "Indigo Cotton Hand Block Print Sari" [ref=e320]
                  - generic [ref=e321]:
                    - link "Indigo Cotton Hand Block Print Sari" [ref=e322] [cursor=pointer]:
                      - /url: /indigo-cotton-hand-block-print-sari-20274224
                      - paragraph [ref=e323]: Indigo Cotton Hand Block Print Sari
                    - paragraph [ref=e324]:
                      - text: M.R.P.
                      - generic [ref=e325]: ₹2,999
              - generic [ref=e326]:
                - link:
                  - /url: /blue-modal-printed-stole-20169480
                - generic [ref=e328]:
                  - link "Blue Modal Printed Stole" [ref=e329] [cursor=pointer]:
                    - /url: /blue-modal-printed-stole-20169480
                    - img "Blue Modal Printed Stole" [ref=e331]
                  - generic [ref=e332]:
                    - link "Blue Modal Printed Stole" [ref=e333] [cursor=pointer]:
                      - /url: /blue-modal-printed-stole-20169480
                      - paragraph [ref=e334]: Blue Modal Printed Stole
                    - paragraph [ref=e335]:
                      - generic [ref=e336]: ₹1,000
                      - text: M.R.P.
                      - deletion [ref=e337]: ₹1,999
                      - insertion [ref=e338]: 50% off
              - generic [ref=e339]:
                - link:
                  - /url: /yellow-cotton-printed-floral-pant-dupatta-kurta-set-20262720
                - generic [ref=e341]:
                  - link "Yellow Cotton Printed Floral Pant, Dupatta & Kurta Set" [ref=e342] [cursor=pointer]:
                    - /url: /yellow-cotton-printed-floral-pant-dupatta-kurta-set-20262720
                    - img "Yellow Cotton Printed Floral Pant, Dupatta & Kurta Set" [ref=e344]
                  - generic [ref=e345]:
                    - link "Yellow Cotton Printed Floral Pant, Dupatta & Kurta Set" [ref=e346] [cursor=pointer]:
                      - /url: /yellow-cotton-printed-floral-pant-dupatta-kurta-set-20262720
                      - paragraph [ref=e347]: Yellow Cotton Printed Floral Pant, Dupatta & Kurta Set
                    - paragraph [ref=e348]:
                      - text: M.R.P.
                      - generic [ref=e349]: ₹4,299
              - generic [ref=e350]:
                - link:
                  - /url: /indigo-cotton-dabu-top-20277649
                - generic [ref=e352]:
                  - link "Indigo Cotton Dabu Top" [ref=e353] [cursor=pointer]:
                    - /url: /indigo-cotton-dabu-top-20277649
                    - img "Indigo Cotton Dabu Top" [ref=e355]
                  - generic [ref=e356]:
                    - link "Indigo Cotton Dabu Top" [ref=e357] [cursor=pointer]:
                      - /url: /indigo-cotton-dabu-top-20277649
                      - paragraph [ref=e358]: Indigo Cotton Dabu Top
                    - paragraph [ref=e359]:
                      - text: M.R.P.
                      - generic [ref=e360]: ₹999
              - generic [ref=e361]:
                - link:
                  - /url: /purple-cotton-chikankari-pleated-maxi-20266567
                - generic [ref=e363]:
                  - link "Purple Cotton Chikankari Pleated Maxi" [ref=e364] [cursor=pointer]:
                    - /url: /purple-cotton-chikankari-pleated-maxi-20266567
                    - img "Purple Cotton Chikankari Pleated Maxi" [ref=e366]
                  - generic [ref=e367]:
                    - link "Purple Cotton Chikankari Pleated Maxi" [ref=e368] [cursor=pointer]:
                      - /url: /purple-cotton-chikankari-pleated-maxi-20266567
                      - paragraph [ref=e369]: Purple Cotton Chikankari Pleated Maxi
                    - paragraph [ref=e370]:
                      - text: M.R.P.
                      - generic [ref=e371]: ₹3,499
            - button "" [ref=e372] [cursor=pointer]:
              - generic [ref=e373]: 
            - button "" [ref=e374] [cursor=pointer]:
              - generic [ref=e375]: 
    - contentinfo [ref=e386]
  - link "WhatsApp Icon" [ref=e390] [cursor=pointer]:
    - /url: https://wa.me/919650600273?text=hi
    - img "WhatsApp Icon" [ref=e391]
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
  8  |         this.accountIcon = page.getByRole('button', { name: 'Account' });
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
> 25 |         await this.accountIcon.click();
     |                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
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