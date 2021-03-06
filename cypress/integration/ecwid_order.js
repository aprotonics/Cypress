describe('Ecwid order test suit', () => {
    it('Ecwid order test', () => {

        cy.visit({
            url: 'https://buy-in-10-seconds.company.site/',
            method: 'GET',
        })

        cy.get('div.grid__products').then(($products) => {

            const products_array = $products.find('a.grid-product__image')

            const product = products_array[1]
                                                            
            cy.get(product)
            .should('be.visible')
            .click()
            .url().should('include', '/Tovar')

        }) 

        // cy.get('#static-html > div:nth-child(1) > div > div > div > div > div > div > div > div.ec-footer > ul > li:nth-child(1) > a')
        // .should('be.visible')
        // .click()
        // .url().should('include', '/search')

        // cy.get('.grid__products > div:first-child div.grid-product__shadow')
        // .should('be.visible')
        // .click()
        // .url().should('include', '/Tovar')

        cy.contains('В корзину')
        .should('be.visible')
        .click()

        cy.get('div.float-icons__wrap > div:first-child svg.icon-default')
        .should('be.visible')
        .click()
        .url().should('include', '/cart')

        cy.get('.ec-cart__body h1.page-title__name.ec-header-h1')
        .should('be.visible')
        .should('have.text', 'Оформление заказа')

        cy.get('#ec-cart-email-input')
        .focus()
        .type('test@mail.ru', { delay: 25 })
        .should('have.value', 'test@mail.ru')
        
        cy.get('input#form-control__checkbox--agree')
        .should('be.enabled')
        .check()
        .should('be.checked')

        cy.contains('Оформить заказ')
        .should('be.visible')
        .click()
        .url().should('include', '/checkout/payment')

        cy.get('div.ec-cart-step__title.ec-header-h4')
        .should('be.visible')
        .should('have.text', 'Бесплатный заказ')

        cy.get('#ec-full-name')
        .should('be.visible')
        .type('test', { delay: 25 })
        .should('have.value', 'test')

        cy.get('#ec-address-line1')
        .should('be.visible')
        .type('test', { delay: 25 })
        .should('have.value', 'test')

        cy.get('#ec-city-list')
        .should('be.visible')
        .type('test', { delay: 25 })
        .should('have.value', 'test')

        cy.get('#ec-postal-code')
        .should('be.visible')
        .type('100000', { delay: 25 })
        .should('have.value', '100000')

        cy.contains('Разместить заказ')
        .should('be.visible')
        .click()
        .url().should('include', '/checkout/order-confirmation')

        // cy.get('div.ec-cart-step__title.ec-header-h4')
        // .should('be.visible')
        // .should('have.text', 'Способ доставки')

        // cy.contains('Продолжить')
        // .should('be.visible')
        // .click()
        // .url().should('include', '/checkout/payment')

        // cy.get('div.ec-cart-step__title.ec-header-h4')
        // .should('be.visible')
        // .should('have.text', 'Оплата')

        // cy.contains('Разместить заказ')
        // .should('be.visible')
        // .click()
        // .url().should('include', '/checkout/order-confirmation')

        cy.get('div.ec-store__confirmation-page h1.page-title__name')
        .should('be.visible')
        .should('include.text', 'Спасибо за заказ')      
        
    })
    
})