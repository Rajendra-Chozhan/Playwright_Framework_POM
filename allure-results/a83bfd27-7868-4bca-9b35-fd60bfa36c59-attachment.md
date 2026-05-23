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
  - waiting for locator('//button[normalize-space()=\'Log Out\']')
    - locator resolved to <button tabindex="0" type="button" class="dropdown-item" _ngcontent-ng-c132793196=""> Log Out </button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is not visible
  - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    4 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 500ms

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
        - button [ref=e39] [cursor=pointer]:
          - img [ref=e40]
        - generic "0 items currently in your cart" [ref=e43] [cursor=pointer]:
          - img [ref=e44]
        - link "0 items currently in your cart" [ref=e47] [cursor=pointer]:
          - /url: /cart
          - img [ref=e48]
    - generic [ref=e56]:
      - text: 
      - navigation [ref=e57]:
        - link "New Arrivals" [ref=e60] [cursor=pointer]:
          - /url: /new-arrivals
          - paragraph [ref=e61]: New Arrivals
      - navigation [ref=e62]:
        - link "Women" [ref=e65] [cursor=pointer]:
          - /url: /women
          - paragraph [ref=e66]: Women
      - navigation [ref=e67]:
        - link "Men" [ref=e70] [cursor=pointer]:
          - /url: /men
          - paragraph [ref=e71]: Men
      - navigation [ref=e72]:
        - link "Kids" [ref=e75] [cursor=pointer]:
          - /url: /kids
          - paragraph [ref=e76]: Kids
      - navigation [ref=e77]:
        - link "Home & Living" [ref=e80] [cursor=pointer]:
          - /url: /home-living
          - paragraph [ref=e81]: Home & Living
      - navigation [ref=e82]:
        - link "Furniture" [ref=e85] [cursor=pointer]:
          - /url: /furniture
          - paragraph [ref=e86]: Furniture
      - navigation [ref=e87]:
        - link "Food" [ref=e90] [cursor=pointer]:
          - /url: /food
          - paragraph [ref=e91]: Food
      - navigation [ref=e92]:
        - link "Collection" [ref=e95] [cursor=pointer]:
          - /url: /
          - paragraph [ref=e96]: Collection
      - navigation [ref=e97]:
        - link "Services" [ref=e100] [cursor=pointer]:
          - /url: /
          - paragraph [ref=e101]: Services
      - navigation [ref=e102]:
        - link "Fabfamily" [ref=e105] [cursor=pointer]:
          - /url: https://fabfamily.fabindia.com/abouttheprogram
          - paragraph [ref=e106]: Fabfamily
      - navigation [ref=e107]:
        - link "Sale" [ref=e110] [cursor=pointer]:
          - /url: /shop/sale
          - paragraph [ref=e111]: Sale
    - main [ref=e112]:
      - generic [ref=e113]:
        - generic [ref=e117]:
          - link "Summer Collection" [ref=e122] [cursor=pointer]:
            - /url: /collection/summer-clothing?promoname=Summer%20Collection&promoID=homemainBanner1
            - img "Summer Collection" [ref=e124]
          - generic [ref=e125]:
            - button "Slide 1" [ref=e126] [cursor=pointer]
            - button "Slide 1" [ref=e127] [cursor=pointer]
            - button "Slide 1" [ref=e128] [cursor=pointer]
            - button "Slide 1" [ref=e129] [cursor=pointer]
            - button "Slide 1" [ref=e130] [cursor=pointer]
            - button "Slide 1" [ref=e131] [cursor=pointer]
          - button "" [ref=e132] [cursor=pointer]:
            - generic [ref=e133]: 
          - button "" [ref=e134] [cursor=pointer]:
            - generic [ref=e135]: 
        - generic [ref=e140]:
          - paragraph [ref=e143]: Fantastic Finds
          - generic [ref=e148]:
            - listbox [ref=e149]:
              - generic [ref=e151]:
                - link "Womens Kurtas" [ref=e155] [cursor=pointer]:
                  - /url: /clothing/women-kurtas?query=:creationtime-desc:allCategories:women-kurtas:priceAfterDiscount:%E2%82%B90-%E2%82%B9999:priceAfterDiscount:%E2%82%B91000-%E2%82%B91,999&promoname=Womens%20Kurtas&promoID=FabHomepageSection3ImagesComponent2
                  - img "Womens Kurtas" [ref=e157]
                - button
              - generic [ref=e159]:
                - link "Men Kurtas" [ref=e163] [cursor=pointer]:
                  - /url: /clothing/men-kurtas?query=:creationtime-desc:allCategories:men-kurtas:priceAfterDiscount:%E2%82%B90-%E2%82%B9999:priceAfterDiscount:%E2%82%B91000-%E2%82%B91,999&promoname=Men%20Kurtas&promoID=FabHomepageSection3ImagesComponent3
                  - img "Men Kurtas" [ref=e165]
                - button
              - generic [ref=e167]:
                - link "Furniture" [ref=e171] [cursor=pointer]:
                  - /url: /shop/furniture?query=:creationtime-desc:allCategories:furniture:priceAfterDiscount:%E2%82%B92000-%E2%82%B92,999:priceAfterDiscount:%E2%82%B93000-%E2%82%B93,999:priceAfterDiscount:%E2%82%B94000-%E2%82%B94,999:priceAfterDiscount:%E2%82%B95000-%E2%82%B96,999:priceAfterDiscount:%E2%82%B97000-%E2%82%B99,999&promoname=Furniture&promoID=FabHomepageSection3ImagesComponent4
                  - img "Furniture" [ref=e173]
                - button
              - generic [ref=e175]:
                - link "Kidswear" [ref=e179] [cursor=pointer]:
                  - /url: /shop/kids-products?query=:creationtime-desc:allCategories:kids-products:priceAfterDiscount:%E2%82%B90-%E2%82%B9999:priceAfterDiscount:%E2%82%B91000-%E2%82%B91,999&promoname=Kidswear&promoID=FabHomepageSection3ImagesComponent5
                  - img "Kidswear" [ref=e181]
                - button
              - generic [ref=e183]:
                - link "Womens Western Wear" [ref=e187] [cursor=pointer]:
                  - /url: /clothing/women-western-wear?query=:creationtime-desc:allCategories:women-western-wear:priceAfterDiscount:%E2%82%B90-%E2%82%B9999&promoname=Womens%20Western%20Wear&promoID=FabHomepageSection3ImagesComponent6
                  - img "Womens Western Wear" [ref=e189]
                - button
              - generic [ref=e191]:
                - link "Mens Shirts and Pants" [ref=e195] [cursor=pointer]:
                  - /url: /clothing/men-western-wear?query=:creationtime-desc:allCategories:men-western-wear:category:shirts:category:pants:priceAfterDiscount:%E2%82%B90-%E2%82%B9999:priceAfterDiscount:%E2%82%B91000-%E2%82%B91,999&promoname=Mens%20Shirts%20and%20Pants&promoID=FabHomepageSection3ImagesComponent7
                  - img "Mens Shirts and Pants" [ref=e197]
                - button
              - generic [ref=e199]:
                - link "Home & Living" [ref=e203] [cursor=pointer]:
                  - /url: /shop/home-living?query=:creationtime-desc:allCategories:home-living:priceAfterDiscount:%E2%82%B90-%E2%82%B9999&promoname=Home%20%26%20Living&promoID=FabHomepageSection3ImagesComponent8
                  - img "Home & Living" [ref=e205]
                - button
            - button "" [ref=e206] [cursor=pointer]:
              - generic [ref=e207]: 
            - button "" [ref=e208] [cursor=pointer]:
              - generic [ref=e209]: 
        - generic [ref=e214]:
          - link "Bed Linen" [ref=e219] [cursor=pointer]:
            - /url: /home/bed-linen?promoname=Bed%20Linen&promoID=FabHomepageSection4BannerComponent1
            - img "Bed Linen" [ref=e221]
          - link "Men's Bush Shirts" [ref=e226] [cursor=pointer]:
            - /url: /search?query=Bush%20shirt&promoname=Men's%20Bush%20Shirts&promoID=FabHomepageSection4BannerComponent2
            - img "Men's Bush Shirts" [ref=e228]
        - generic [ref=e231]:
          - paragraph [ref=e233]: Recommended For You
          - generic [ref=e237]:
            - generic [ref=e239]:
              - generic [ref=e240]:
                - link:
                  - /url: /white-cotton-full-length-churidar-10738325
                - generic [ref=e242]:
                  - link "Beige Cotton Full Length Churidar" [ref=e243] [cursor=pointer]:
                    - /url: /white-cotton-full-length-churidar-10738325
                    - img "Beige Cotton Full Length Churidar" [ref=e245]
                  - generic [ref=e246]:
                    - link "Beige Cotton Full Length Churidar" [ref=e247] [cursor=pointer]:
                      - /url: /white-cotton-full-length-churidar-10738325
                      - paragraph [ref=e248]: Beige Cotton Full Length Churidar
                    - paragraph [ref=e249]:
                      - generic [ref=e250]: ₹300
                      - text: M.R.P.
                      - deletion [ref=e251]: ₹599
                      - insertion [ref=e252]: 50% off
              - generic [ref=e253]:
                - link:
                  - /url: /wine-ameera-cotton-printed-single-bed-sheet-with-1-pillow-cover-10738798
                - generic [ref=e255]:
                  - link "Wine Ameera Cotton Printed Single Bed Sheet With 1 Pillow Cover" [ref=e256] [cursor=pointer]:
                    - /url: /wine-ameera-cotton-printed-single-bed-sheet-with-1-pillow-cover-10738798
                    - img "Wine Ameera Cotton Printed Single Bed Sheet With 1 Pillow Cover" [ref=e258]
                  - generic [ref=e259]:
                    - link "Wine Ameera Cotton Printed Single Bed Sheet With 1 Pillow Cover" [ref=e260] [cursor=pointer]:
                      - /url: /wine-ameera-cotton-printed-single-bed-sheet-with-1-pillow-cover-10738798
                      - paragraph [ref=e261]: Wine Ameera Cotton Printed Single Bed Sheet With 1 Pillow Cover
                    - paragraph [ref=e262]:
                      - generic [ref=e263]: ₹1,250
                      - text: M.R.P.
                      - deletion [ref=e264]: ₹2,499
                      - insertion [ref=e265]: 50% off
              - generic [ref=e266]:
                - link:
                  - /url: /natural-cotton-hand-block-printed-slim-fit-long-kurta-20295151
                - generic [ref=e268]:
                  - link "Natural Cotton Hand Block Print Slim Fit Long Kurta" [ref=e269] [cursor=pointer]:
                    - /url: /natural-cotton-hand-block-printed-slim-fit-long-kurta-20295151
                    - img "Natural Cotton Hand Block Print Slim Fit Long Kurta" [ref=e271]
                  - generic [ref=e272]:
                    - link "Natural Cotton Hand Block Print Slim Fit Long Kurta" [ref=e273] [cursor=pointer]:
                      - /url: /natural-cotton-hand-block-printed-slim-fit-long-kurta-20295151
                      - paragraph [ref=e274]: Natural Cotton Hand Block Print Slim Fit Long Kurta
                    - paragraph [ref=e275]:
                      - text: M.R.P.
                      - generic [ref=e276]: ₹2,499
              - generic [ref=e277]:
                - link:
                  - /url: /orange-cotton-chikankari-slim-fit-long-kurta-20253827
                - generic [ref=e279]:
                  - link "Orange Cotton Chikankari Slim Fit Long Kurta" [ref=e280] [cursor=pointer]:
                    - /url: /orange-cotton-chikankari-slim-fit-long-kurta-20253827
                    - img "Orange Cotton Chikankari Slim Fit Long Kurta" [ref=e282]
                  - generic [ref=e283]:
                    - link "Orange Cotton Chikankari Slim Fit Long Kurta" [ref=e284] [cursor=pointer]:
                      - /url: /orange-cotton-chikankari-slim-fit-long-kurta-20253827
                      - paragraph [ref=e285]: Orange Cotton Chikankari Slim Fit Long Kurta
                    - paragraph [ref=e286]:
                      - text: M.R.P.
                      - generic [ref=e287]: ₹4,499
              - generic [ref=e288]:
                - link:
                  - /url: /red-cotton-hand-block-printed-maxi-20270756
                - generic [ref=e290]:
                  - link "Red Cotton Hand Block Printed Maxi" [ref=e291] [cursor=pointer]:
                    - /url: /red-cotton-hand-block-printed-maxi-20270756
                    - img "Red Cotton Hand Block Printed Maxi" [ref=e293]
                  - generic [ref=e294]:
                    - link "Red Cotton Hand Block Printed Maxi" [ref=e295] [cursor=pointer]:
                      - /url: /red-cotton-hand-block-printed-maxi-20270756
                      - paragraph [ref=e296]: Red Cotton Hand Block Printed Maxi
                    - paragraph [ref=e297]:
                      - text: M.R.P.
                      - generic [ref=e298]: ₹3,499
              - generic [ref=e299]:
                - link:
                  - /url: /mustard-cotton-hand-block-print-slim-fit-short-kurta-20292856
                - generic [ref=e301]:
                  - link "Mustard Cotton Hand Block Print Slim Fit Short Kurta" [ref=e302] [cursor=pointer]:
                    - /url: /mustard-cotton-hand-block-print-slim-fit-short-kurta-20292856
                    - img "Mustard Cotton Hand Block Print Slim Fit Short Kurta" [ref=e304]
                  - generic [ref=e305]:
                    - link "Mustard Cotton Hand Block Print Slim Fit Short Kurta" [ref=e306] [cursor=pointer]:
                      - /url: /mustard-cotton-hand-block-print-slim-fit-short-kurta-20292856
                      - paragraph [ref=e307]: Mustard Cotton Hand Block Print Slim Fit Short Kurta
                    - paragraph [ref=e308]:
                      - text: M.R.P.
                      - generic [ref=e309]: ₹1,699
              - generic [ref=e310]:
                - link:
                  - /url: /black-cotton-long-kurta-20295338
                - generic [ref=e312]:
                  - link "Maroon Cotton Long Kurta" [ref=e313] [cursor=pointer]:
                    - /url: /black-cotton-long-kurta-20295338
                    - img "Maroon Cotton Long Kurta" [ref=e315]
                  - generic [ref=e316]:
                    - link "Maroon Cotton Long Kurta" [ref=e317] [cursor=pointer]:
                      - /url: /black-cotton-long-kurta-20295338
                      - paragraph [ref=e318]: Maroon Cotton Long Kurta
                    - paragraph [ref=e319]:
                      - text: M.R.P.
                      - generic [ref=e320]: ₹1,599
              - generic [ref=e321]:
                - link:
                  - /url: /indigo-cotton-hand-block-print-sari-20274224
                - generic [ref=e323]:
                  - link "Indigo Cotton Hand Block Print Sari" [ref=e324] [cursor=pointer]:
                    - /url: /indigo-cotton-hand-block-print-sari-20274224
                    - img "Indigo Cotton Hand Block Print Sari" [ref=e326]
                  - generic [ref=e327]:
                    - link "Indigo Cotton Hand Block Print Sari" [ref=e328] [cursor=pointer]:
                      - /url: /indigo-cotton-hand-block-print-sari-20274224
                      - paragraph [ref=e329]: Indigo Cotton Hand Block Print Sari
                    - paragraph [ref=e330]:
                      - text: M.R.P.
                      - generic [ref=e331]: ₹2,999
              - generic [ref=e332]:
                - link:
                  - /url: /blue-modal-printed-stole-20169480
                - generic [ref=e334]:
                  - link "Blue Modal Printed Stole" [ref=e335] [cursor=pointer]:
                    - /url: /blue-modal-printed-stole-20169480
                    - img "Blue Modal Printed Stole" [ref=e337]
                  - generic [ref=e338]:
                    - link "Blue Modal Printed Stole" [ref=e339] [cursor=pointer]:
                      - /url: /blue-modal-printed-stole-20169480
                      - paragraph [ref=e340]: Blue Modal Printed Stole
                    - paragraph [ref=e341]:
                      - generic [ref=e342]: ₹1,000
                      - text: M.R.P.
                      - deletion [ref=e343]: ₹1,999
                      - insertion [ref=e344]: 50% off
              - generic [ref=e345]:
                - link:
                  - /url: /yellow-cotton-printed-floral-pant-dupatta-kurta-set-20262720
                - generic [ref=e347]:
                  - link "Yellow Cotton Printed Floral Pant, Dupatta & Kurta Set" [ref=e348] [cursor=pointer]:
                    - /url: /yellow-cotton-printed-floral-pant-dupatta-kurta-set-20262720
                    - img "Yellow Cotton Printed Floral Pant, Dupatta & Kurta Set" [ref=e350]
                  - generic [ref=e351]:
                    - link "Yellow Cotton Printed Floral Pant, Dupatta & Kurta Set" [ref=e352] [cursor=pointer]:
                      - /url: /yellow-cotton-printed-floral-pant-dupatta-kurta-set-20262720
                      - paragraph [ref=e353]: Yellow Cotton Printed Floral Pant, Dupatta & Kurta Set
                    - paragraph [ref=e354]:
                      - text: M.R.P.
                      - generic [ref=e355]: ₹4,299
              - generic [ref=e356]:
                - link:
                  - /url: /indigo-cotton-dabu-top-20277649
                - generic [ref=e358]:
                  - link "Indigo Cotton Dabu Top" [ref=e359] [cursor=pointer]:
                    - /url: /indigo-cotton-dabu-top-20277649
                    - img "Indigo Cotton Dabu Top" [ref=e361]
                  - generic [ref=e362]:
                    - link "Indigo Cotton Dabu Top" [ref=e363] [cursor=pointer]:
                      - /url: /indigo-cotton-dabu-top-20277649
                      - paragraph [ref=e364]: Indigo Cotton Dabu Top
                    - paragraph [ref=e365]:
                      - text: M.R.P.
                      - generic [ref=e366]: ₹999
              - generic [ref=e367]:
                - link:
                  - /url: /purple-cotton-chikankari-pleated-maxi-20266567
                - generic [ref=e369]:
                  - link "Purple Cotton Chikankari Pleated Maxi" [ref=e370] [cursor=pointer]:
                    - /url: /purple-cotton-chikankari-pleated-maxi-20266567
                    - img "Purple Cotton Chikankari Pleated Maxi" [ref=e372]
                  - generic [ref=e373]:
                    - link "Purple Cotton Chikankari Pleated Maxi" [ref=e374] [cursor=pointer]:
                      - /url: /purple-cotton-chikankari-pleated-maxi-20266567
                      - paragraph [ref=e375]: Purple Cotton Chikankari Pleated Maxi
                    - paragraph [ref=e376]:
                      - text: M.R.P.
                      - generic [ref=e377]: ₹3,499
            - button "" [ref=e378] [cursor=pointer]:
              - generic [ref=e379]: 
            - button "" [ref=e380] [cursor=pointer]:
              - generic [ref=e381]: 
    - contentinfo [ref=e392]:
      - generic [ref=e394]:
        - generic [ref=e396]:
          - navigation [ref=e397]:
            - generic [ref=e398]: Let Us Help You
            - generic [ref=e400]:
              - navigation [ref=e401]:
                - link "Order Tracking" [ref=e403] [cursor=pointer]:
                  - /url: /track-your-order
              - navigation [ref=e404]:
                - link "Bulk Orders" [ref=e406] [cursor=pointer]:
                  - /url: /bulk-orders
              - navigation [ref=e407]:
                - link "Store Locator" [ref=e409] [cursor=pointer]:
                  - /url: /store-finder
              - navigation [ref=e410]:
                - link "Furniture Warranty Policy" [ref=e412] [cursor=pointer]:
                  - /url: /furniture-warranty-policy
              - navigation [ref=e413]:
                - link "Gift Card" [ref=e415] [cursor=pointer]:
                  - /url: /giftcard
              - navigation [ref=e416]:
                - link "Franchise Enquiry Form" [ref=e418] [cursor=pointer]:
                  - /url: /franchise
              - navigation [ref=e419]:
                - link "Interior Design Studio" [ref=e421] [cursor=pointer]:
                  - /url: /interior-designpage
          - navigation [ref=e422]:
            - generic [ref=e423]: Support
            - generic [ref=e425]:
              - navigation [ref=e426]:
                - link "Customer Service" [ref=e428] [cursor=pointer]:
                  - /url: /customer-service
              - navigation [ref=e429]:
                - link "How To Order" [ref=e431] [cursor=pointer]:
                  - /url: /how-to-order
              - navigation [ref=e432]:
                - link "Billing & Payments" [ref=e434] [cursor=pointer]:
                  - /url: /billing-payment
              - navigation [ref=e435]:
                - link "Shipping & Delivery" [ref=e437] [cursor=pointer]:
                  - /url: /shipping-delivery
              - navigation [ref=e438]:
                - link "Return & Exchanges" [ref=e440] [cursor=pointer]:
                  - /url: /return-exchange
              - navigation [ref=e441]:
                - link "FAQs" [ref=e443] [cursor=pointer]:
                  - /url: /faqs
          - navigation [ref=e444]:
            - generic [ref=e445]: Company
            - generic [ref=e447]:
              - navigation [ref=e448]:
                - link "Investor Relations" [ref=e450] [cursor=pointer]:
                  - /url: /ir/board-of-directors
              - navigation [ref=e451]:
                - link "Contact Us" [ref=e453] [cursor=pointer]:
                  - /url: /contact-us
              - navigation [ref=e454]:
                - link "In The News" [ref=e456] [cursor=pointer]:
                  - /url: /ir/inthenews
              - navigation [ref=e457]:
                - link "Careers" [ref=e459] [cursor=pointer]:
                  - /url: /careers
              - navigation [ref=e460]:
                - link "Terms Of Use" [ref=e462] [cursor=pointer]:
                  - /url: /term-of-use
              - navigation [ref=e463]:
                - link "Privacy Policy" [ref=e465] [cursor=pointer]:
                  - /url: /privacy-policy
          - navigation [ref=e466]:
            - generic [ref=e467]: About Fabindia
            - generic [ref=e469]:
              - navigation [ref=e470]:
                - link "65 years of Fabindia" [ref=e472] [cursor=pointer]:
                  - /url: /60-years-of-fabindia
              - navigation [ref=e473]:
                - link "Philosophy" [ref=e475] [cursor=pointer]:
                  - /url: /philosophy
              - navigation [ref=e476]:
                - link "Organic Certification" [ref=e478] [cursor=pointer]:
                  - /url: /organic-certification
              - navigation [ref=e479]:
                - link "The Fabindia School" [ref=e481] [cursor=pointer]:
                  - /url: /fabindia-schools
              - navigation [ref=e482]:
                - link "About Us" [ref=e484] [cursor=pointer]:
                  - /url: /about-us
              - navigation [ref=e485]:
                - link "Fabfamily" [ref=e487] [cursor=pointer]:
                  - /url: https://fabfamily.fabindia.com/abouttheprogram
              - navigation [ref=e488]:
                - link "Blog" [ref=e490] [cursor=pointer]:
                  - /url: https://blog.fabindia.com/
        - generic [ref=e491]:
          - paragraph [ref=e492]: Follow Us
          - generic [ref=e493]:
            - link [ref=e494] [cursor=pointer]:
              - /url: https://m.facebook.com/Fabindia
              - img [ref=e495]
            - link [ref=e497] [cursor=pointer]:
              - /url: https://twitter.com/FabindiaNews
              - img [ref=e498]
            - link [ref=e500] [cursor=pointer]:
              - /url: https://www.instagram.com/fabindiaofficial
              - img [ref=e501]
            - link [ref=e503] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/fabindia-overseas-pvt-ltd
              - img [ref=e504]
            - link [ref=e506] [cursor=pointer]:
              - /url: https://www.youtube.com/c/FabindiaNews
              - img [ref=e507]
        - generic [ref=e509]:
          - paragraph [ref=e510]: Our Largest Store At Your Fingertips
          - generic [ref=e511]:
            - link "undefined" [ref=e512] [cursor=pointer]:
              - /url: https://play.google.com/store/apps/details?id=com.fabindia.shopping
              - img "undefined" [ref=e515]
            - link "undefined" [ref=e516] [cursor=pointer]:
              - /url: https://apps.apple.com/us/app/fabindia-online-shopping/id1479713062
              - img "undefined" [ref=e519]
        - generic [ref=e521]: © Copyright 2026 Fabindia.com. All rights reserved.
  - link "WhatsApp Icon" [ref=e523] [cursor=pointer]:
    - /url: https://wa.me/919650600273?text=hi
    - img "WhatsApp Icon" [ref=e524]
```

# Test source

```ts
  1  | const env = require('../configurations/env');
  2  | 
  3  | class HomePage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.searchBox = '//input[@id="searchBox"][1]';
  7  |         this.menu = '//nav';
  8  |         this.profile = "//app-fab-login-slot//*[contains(@class,'header-icon-sprite')]";
  9  |         this.logout = "//button[normalize-space()='Log Out']";
  10 |     }
  11 | 
  12 |     async navigate() {
  13 |         await this.page.goto(env.baseURL);
  14 |     }
  15 | 
  16 |     async searchProduct(productName) {
  17 |         await this.page.fill(this.searchBox, productName);
  18 |         await this.page.keyboard.press('Enter');
  19 |          await this.page.waitForTimeout(5000);
  20 |     }
  21 | 
  22 |     async isMenuVisible() {
  23 |         return await this.page.isVisible(this.menu);
  24 |     }
  25 | 
  26 |      async moveToprofile() {
  27 |                return await this.page.locator(this.profile).hover();
  28 | 
  29 |     }
  30 | 
  31 |      async clickLogOut() {
> 32 |         return await this.page.locator(this.logout).click();
     |                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  33 |     }
  34 | }
  35 | 
  36 | 
  37 | module.exports = HomePage;
```