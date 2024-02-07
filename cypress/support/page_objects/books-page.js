export class BooksPage{

    //sort by Price Low to High
    sortByPriceLowToHigh(){
        let lowPrice
        let highPrice
        //sort by Price: Low to High
        cy.get('#products-orderby').select('Price: Low to High') 
        //select the first item-box and retrieve the actual-price value
        cy.get('.item-box').first().find('.actual-price').invoke('text').then((text) => {
            lowPrice = parseFloat(text) //text to number
            })
        //select the last item-box and retrieve the actual-price value
        cy.get('.item-box').last().find('.actual-price').invoke('text').then((text) => {
            highPrice = parseFloat(text) //text to number
            }).then(() => {
        //compare lowPrice value and highPrice value
                cy.wrap(lowPrice).should('be.lte', highPrice) //lte - less or equal                                  
                })
    }

    //filter by Price
    filterByPrice(priceToCompare){
        const filter = 'Under 25'
            //sort by Price first to compare first and last item later
            cy.get('#products-orderby').select('Price: Low to High') 
            //filter by Price: Under 25
            cy.get('.price-range-selector').contains(filter).click()
                //select the first item-box and retrieve the actual-price value
                cy.get('.item-box').first().find('.actual-price').invoke('text').then((text) => {
                  const lowPrice = parseFloat(text) //to number
                  cy.wrap(lowPrice).should('be.lessThan', priceToCompare) //compare price
                })
                //select the last item-box and retrieve the actual-price value
                cy.get('.item-box').last().find('.actual-price').invoke('text').then((text) => {
                  const highPrice = parseFloat(text) //to number
                  cy.wrap(highPrice).should('be.lessThan', priceToCompare) //compare price
                })        
    }

    //set different page sizes
    setDifferentPageSizes(){
        const pageSizes = [4, 8, 12]; //page sizes
        pageSizes.forEach((pageSize) => { //go through different pageSize
            // select the page size 
            cy.get('#products-pagesize').select(pageSize.toString())        
            // compare number of items with selected page size
            cy.get('.product-item').its('length').should('be.lte', pageSize)
            })  
    }

    
/**
 * Sets the page size for a product page and verifies the number of displayed items.
 * @param {number} size - The desired page size.
 */
    setPageSize(size){
        //select the page size = size
        cy.get('#products-pagesize').select(size.toString())       
        // compare number of items with selected page size
        cy.get('.product-item').its('length').should('be.lte', size)
    }


    //view as Grid
    viewAsGrid(){
        cy.get('#products-viewmode').select('Grid')
        cy.get('.product-grid').should('exist')

    }

    //view as List
    viewAsList(){
        cy.get('#products-viewmode').select('List') 
        cy.get('.product-list').should('exist')
    }

    

}

export const booksPage = new BooksPage()