export class WebShopPageAction{

    
/**
* Navigates to the Shopping cart page
*/
    openShoppingCart(){
    cy.get('#topcartlink .ico-cart').click() //go to Shopping cart page
    cy.get('h1').should('contain', 'Shopping cart') //verify that the page title contains "Shopping cart"
    }

    //search field
    searchByProduct(searchTerm){
        cy.get('#small-searchterms').type(searchTerm) //text for search
        cy.get('input[type="submit"][value="Search"]').click() //submit button
        cy.get('.search-input #Q').should('have.value', searchTerm) //serch text check
        cy.get('.item-box').find('.product-title').should('contain', searchTerm) //search item check
    }    

    //add new product into the cart
    addNewProductToCart(product){
        cy.get('.product-item').contains(product).click()
        cy.get('h1').should('contain', product)
        cy.get('.overview').find('input[type="button"][value="Add to cart"]').click() //add to cart button
        cy.get('.content').should('contain', 'The product has been added to your shopping cart')
    }

    //remove product from the cart
    removeProductFromCart(product){       
        cy.get('.product-name').contains(product).parents('.cart-item-row').find('.remove-from-cart').click()
        cy.get('.update-cart-button').click()
        cy.contains(product).should('not.exist')
     }


}

export const newItem = new WebShopPageAction()