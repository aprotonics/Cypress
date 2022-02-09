describe('Ecwid order test suit', () => {
    it('Ecwid order test', () => {

        cy.visit({
            url: 'https://buy-in-10-seconds.company.site/Tovar-1-p351702553',
            method: 'GET',
        })

        cy.contains('В корзину')
        .should('be.visible')
        .click()

        cy.get('.float-icons__icon--cart > .ec-cart-widget > .ec-minicart')
        .should('be.visible')
        .click()
        .url().should('include', '/cart')

        cy.get('.ec-cart__body h1.page-title__name.ec-header-h1')
        .should('be.visible')
        .should('have.text', 'Оформление заказа')

        cy.get('#ec-cart-email-input')
        .type('test@mail.ru', { delay: 25 })
        .should('have.value', 'test@mail.ru')
        
        cy.get('#form-control__checkbox--agree')
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

        cy.get('div.ec-store__confirmation-page h1.page-title__name')
        .should('be.visible')
        .should('include.text', 'Спасибо за заказ')      
        
    })
    
})