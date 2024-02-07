/// <reference types="cypress" />

context('testpages.eviltester', () => {

    describe('basic web page', () => {
        beforeEach(() => {
          cy.visit('https://testpages.eviltester.com/styled/basic-web-page-test.html')
        })      
        
        it('check title of the page', () => {
          cy.get('h1').should('have.text', 'Basic Web Page Example')
          cy.get('#para1').should('have.text', 'A paragraph of text')
          cy.get('#para2').should('have.text', 'Another paragraph of text')
        })
    })

    describe('basic htlm form', () => {
      beforeEach(() => {
        cy.visit('https://testpages.eviltester.com/styled/basic-html-form-test.html')
      })
    
      //fill the form and check fields values
      it.only('fill basic htlm form', () => {
        cy.get('h1').should('have.text', 'Basic HTML Form Example')
        //fill the form
        cy.get('[name="username"]').type('TestName')
        cy.get('[name="password"]').type('TestPassword')
        cy.get('[name="comments"]').type('Some new Comments here')
        cy.get('[value="cb1"]').check()
        cy.get('[value="cb3"]').uncheck()
        cy.get('[value="rd3"]').click()
        cy.get('[name="dropdown"]').select('dd5')
        cy.get('[type="submit"]').click() //submit
        //validate
        cy.get('#_valueusername').should('have.text', 'TestName')
        cy.get('#_valuepassword').should('have.text', 'TestPassword')
        cy.get('#_valuecomments').should('contain', 'Some new Comments here')
        cy.get('#_valuecheckboxes0').should('have.text', 'cb1')
        cy.get('#_valuedropdown').should('have.text', 'dd5')
        cy.get('#back_to_form').click() //back     
      })


      it.only('empty basic htlm form', () => {
        cy.get('[type="submit"]').click() //submit
        cy.get('#_username').should('contain', 'No Value for username') //validate
        cy.get('#_password').should('contain', 'No Value for password')
        cy.get('#back_to_form').click() //back  
      })

  })

    
})