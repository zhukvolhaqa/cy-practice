
export class GiftCardsPage{

     //add virtual gift card into the cart
    addVirtualGiftCardToCart(product){
        const recipientName = 'Leo'
        const recipientEmail = 'leo.test@test.net'
        cy.get('.product-item').contains(product).click()
        cy.get('h1').should('contain', product)
        cy.get('.recipient-name').type(recipientName)
        cy.get('.recipient-email').type(recipientEmail) 
        cy.get('.message').type('Happy Birthday ' + recipientName)
        cy.get('.add-to-cart-panel').find('input[type="button"][value="Add to cart"]').click() //Add to cart button
        cy.get('.content').should('contain', 'The product has been added to your shopping cart') //confirmation
    }
    

}

export const newCard = new GiftCardsPage()