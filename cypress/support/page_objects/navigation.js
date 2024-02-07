export class WebShopPage{

    booksPage(){
        cy.get('.top-menu').contains('Books').click()
    }

    computersPage(){
        cy.get('.top-menu').contains('Computers').click()
    }

    electronicsPage(){
        cy.get('.top-menu').contains('Electronics').click()
    }

    apparelAndShoesPage(){
        cy.get('.top-menu').contains('Apparel & Shoes').click()
    }

    digitalDownloadsPage(){
        cy.get('.top-menu').contains('Digital downloads').click()
    }

    jewerlyPage(){
        cy.get('.top-menu').contains('Jewelry').click()
    }

    giftCardsPage(){
        cy.get('.top-menu').contains('Gift Cards').click()
    }

}

export const navigateTo = new WebShopPage()