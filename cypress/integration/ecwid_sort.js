describe('Sort test suit', () => {

    let sortSelectSelector = '#ec-products-sort'
    let titlesFieldsSelector = 'div.grid__products > div.grid-product div.grid-product__title-inner'
    let pricesFieldsSelector = 'div.grid-product__price-value'

    it('sort by name test', () => {
        
        cy.visit('https://buy-in-10-seconds.company.site/search')

        // create an array of names
        let titles = []
        cy.get(titlesFieldsSelector)
        .each((titleField) => {
            
            cy.wrap(titleField)
            .should('be.visible')
            .invoke('text')
            .then((title) => {
                titles.push(title)
            })  
        }).then(() => {
            
            titles.sort()

            // sort products
            cy.get(sortSelectSelector)
            .select('nameAsc')
            .should('have.value', 'nameAsc')

            cy.url()
            .should('contain', 'nameAsc')

            cy.wait(1000)
        }).then(() => {
            //create a new array of names and compare arrays
            let newTitles = []
            cy.get(titlesFieldsSelector)
            .each((titleField) => {
                
                cy.wrap(titleField)
                .should('be.visible')
                .invoke('text')
                .then((title) => {
                    newTitles.push(title)
                })  
            }).then(() => {
                cy.log(newTitles)
                expect(titles).to.deep.equal(newTitles)
            })
            
        })
    })
    
    it('sort by price test', () => {

        cy.visit('https://buy-in-10-seconds.company.site/search')

        // create an array of prices
        cy.get(pricesFieldsSelector)
        .should('be.visible')
        .invoke('text')
        .then((pricesFields) => {
            
            let prices = pricesFields.split('$')
            prices.shift()  
            cy.log(prices.toString())        
            prices.sort( (a, b) => a - b )
            cy.log(prices.toString())

            // sort products
            cy.get(sortSelectSelector)
            .select('priceAsc')
            .should('have.value', 'priceAsc')

            cy.url()
            .should('contain', 'priceAsc')

            cy.wait(1000)

            // create a new array of prices and compare arrays
            cy.get(pricesFieldsSelector)
            .should('be.visible')
            .invoke('text')
            .then((newPricesFields) => {

                let newPrices = newPricesFields.split('$')
                newPrices.shift()
                cy.log(newPrices.toString())

                expect(prices).to.deep.equal(newPrices)
            })
        })    

    })   
})