/// <reference types="cypress" />

context('uitestingplayground', () => {

describe('home page', () => {
    beforeEach(() => {
      cy.visit('http://uitestingplayground.com/')
    })
  
    it('check title of the home page', () => {
      cy.get('#title').should('have.text', 'UI Test AutomationPlayground')
    })
})

describe('ajax data page', () => {
  beforeEach(() => {
    cy.visit('http://uitestingplayground.com/ajax')
  })

  it('click the button and wait for the label text', () => {
    cy.get('h3').should('have.text', 'AJAX Data')
    cy.get('#ajaxButton').click() //button by id
    cy.wait(15000) // wait for data to appear (15 seconds)
    cy.get('.bg-success').should('exist').click()
    .should('have.text', 'Data loaded with AJAX get request.')
  })
})

})