export class PageLogin{

    loginIntoTheShop(email, password){
        cy.get('.ico-login').click() //log in link click
        cy.get('#Email').type(email)
        cy.get('#Password').type(password)
        cy.get('.returning-wrapper [type=submit]').click() //submit button click
        cy.get('.header-links .account').should('contain', email) //validation
    }

    logoutFromTheShop(){
        cy.get('.ico-logout').click()      
    }

}

export const user = new PageLogin()