/// <reference types="cypress" />

import { user } from "../../support/page_objects/login"
import { newItem } from "../../support/page_objects/page-actions"
import { navigateTo} from "../../support/page_objects/navigation"
import { booksPage } from "../../support/page_objects/books-page"
import { newCard } from "../../support/page_objects/giftcards-page"

context('demo webshop', () => {

    beforeEach(() => {
       cy.visit('/') //baseUrl from cypress.config.js
      })   


     //home page tests
      describe('home page', () => {
         
        //navigation from the top-menu and header check
        it('navigation from the top-menu', () => {
            navigateTo.booksPage()
            cy.get('h1').should('have.text', 'Books')
            navigateTo.computersPage()
            cy.get('h1').should('have.text', 'Computers')
            navigateTo.electronicsPage()
            cy.get('h1').should('have.text', 'Electronics')
            navigateTo.apparelAndShoesPage()
            cy.get('h1').should('have.text', 'Apparel & Shoes')
            navigateTo.digitalDownloadsPage()
            cy.get('h1').should('have.text', 'Digital downloads')
            navigateTo.jewerlyPage()
            cy.get('h1').should('have.text', 'Jewelry')
            navigateTo.giftCardsPage()
            cy.get('h1').should('have.text', 'Gift Cards')      
        })

        //login and logout check
        it('login and logout ', () => {
            //email and password from cypress.config  env
            const email = Cypress.env('username');
            const password = Cypress.env('password');
            //login
            user.loginIntoTheShop(email, password)                 
            //logout
            user.logoutFromTheShop()
        })

    }) 

    //books page tests
    describe('books page', () => {
        beforeEach(() => {
            navigateTo.booksPage()
        })   
       
        //sorting check
        it('books page - sort by Price: Low to High', () => {
            booksPage.sortByPriceLowToHigh()    
        })

        //filtering check
        it('books page - filter by Price', () => {
            booksPage.filterByPrice(25)        
        })


        //display per page check
        it('books page - display per page checks', () => {
            booksPage.setDifferentPageSizes() //check page size with different options
            booksPage.setPageSize(4) //set page size = 4                  
        })

        //view as List / Grid check
        it('books page - view as List / Grid', () => {
            booksPage.viewAsGrid()
            booksPage.viewAsList()
        })


        //search field check
        it('books page - search item and add to cart', () => {
            const searchTerm = 'Health Book';
            newItem.searchByProduct(searchTerm)
            newItem.addNewProductToCart(searchTerm)
            newItem.openShoppingCart()         
        }) 
        
        //add new book into the cart
        it('books page - add new book to the cart and then remove', () => {
            const newProduct = 'Fiction';
            newItem.addNewProductToCart(newProduct)
            newItem.openShoppingCart()
            newItem.removeProductFromCart(newProduct)
        }) 


    })


    //gift cards page tests
    describe('gift cards page', () => {
        beforeEach(() => {
            //email and password from cypress.config  env
            const email = Cypress.env('username');
            const password = Cypress.env('password');
            //login
            user.loginIntoTheShop(email, password)   
            //go to gift card page
            navigateTo.giftCardsPage()
        })

        //search by item
        it('gift card page - search by item', () => {
            const cardTitle = '$5 Virtual Gift Card'
            newItem.searchByProduct(cardTitle)       
        }) 

        //add item to the cart and then remove
        it('gift card page - add item to the cart and then remove', () => {
            const cardTitle = '$25 Virtual Gift Card'
            newCard.addVirtualGiftCardToCart(cardTitle) //add card
            newItem.openShoppingCart() //open Shopping cart
            newItem.removeProductFromCart(cardTitle) //remove card
        }) 


    })

})