import { should } from "chai";
import { describe } from "mocha";
/// <reference types="cypress" />

describe('İlk test',()=>{

     ////////  
     it('ürün arama testi',()=>{

            cy.viewport("macbook-16")
            cy.visit('https://www.trendyol.com/')
            cy.wait(1*1000)
            cy.get('#onetrust-accept-btn-handler').click()
     
            cy.get('[data-testid="suggestion"]').click()
            cy.get('[data-testid="suggestion"]').type("telefon").should("have.value","telefon")
        // cy.get('[data-testid="search-icon"]').click()
 })



     ////////
     it('ana sayfanin yüklenmesi',()=>{

            cy.viewport("macbook-16")
            cy.visit('https://www.trendyol.com/')
            cy.wait(1*1000)
            cy.url().should('eq','https://www.trendyol.com/')   
 })

 
     it('cerez kabul butonunun görünmesi',()=>{

            cy.viewport("macbook-16")
            cy.visit('https://www.trendyol.com/')
            cy.wait(1*1000)
            cy.get('#onetrust-accept-btn-handler').should('be.visible')
       
})       


      it('ürün arama butonunun görünmesi',()=>{

            cy.viewport("macbook-16")
            cy.visit('https://www.trendyol.com/')
            cy.get('#onetrust-accept-btn-handler').click()
            cy.wait(1*1000)
            cy.get('[data-testid="suggestion"]').should('be.visible')
            
})       


    ///////
    it('giris yapma testi',()=>{

           cy.viewport("macbook-16")
           cy.visit('https://www.trendyol.com/')
           cy.url().should('eq','https://www.trendyol.com/')
           cy.wait(1*1000)
           cy.get('#onetrust-accept-btn-handler').click()

           cy.get('.user-login-container > .link').click()
           cy.url().should('eq','https://www.trendyol.com/giris?cb=%2F')
           cy.get('[data-testid="email-input"]').type("sudesaffak@hotmail.com").should("have.value","sudesaffak@hotmail.com")
           cy.get('[data-testid="password-input"]').type("Sa1360hn").should("not.be.null")
        // cy.get('.q-primary').click()
})



    ///////
    it('alisveris yapma testi',()=>{
 
          cy.viewport("macbook-16")
          cy.visit('https://www.trendyol.com/')
          cy.url().should('eq','https://www.trendyol.com/')
          cy.wait(1*1000)
          cy.get('#onetrust-accept-btn-handler').click()

          cy.get(':nth-child(1) > .category-header').click()
          cy.url().should('eq','https://www.trendyol.com/butik/liste/1/kadin')
          cy.get('.image-container').first().click()
          cy.get('.overlay').click()
          cy.get('.product-button-container > .add-to-basket > .add-to-basket-button-text').click()
          cy.get('.basket-preview > .link').click()
          cy.url().should('eq','https://www.trendyol.com/sepet')

})


})


