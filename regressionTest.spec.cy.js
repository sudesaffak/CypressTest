describe('Regression Test - E-commerce Site', () => {

    beforeEach(() => {
      // Testlerden önce ana sayfayı ziyaret et
      cy.visit('https://www.trendyol.com/')
      cy.get('#onetrust-accept-btn-handler').click()
    })
  
    it('Ana sayfa açilmali ve başlik doğru olmali', () => {
      cy.title().should('include', "En Trend Ürünler Türkiye'nin Online Alışveriş Sitesi Trendyol'da")
    })
  
    it('Ürün arama özelliği doğru çalişmali', () => {
      cy.get('[data-testid="suggestion"]').type('laptop')
      //cy.get('[data-testid="search-icon"]').click()
      //cy.url().should('include', '/search?query=laptop')
      //cy.get('.product-list').should('be.visible')
    })
  
    it('Sepete ürün ekleme çalişmali', () => {
      cy.get('.image-container').first().click() // İlk ürünü seç
      cy.get('.overlay').click()
      cy.get('.product-button-container > .add-to-basket > .add-to-basket-button-text').click()// Sepete ekle
      cy.get('.basket-preview > .link').should('contain', '1') // Sepette ürün sayısını kontrol et
    })
  
    it('Kullanici girişi yapilabilmeli', () => {
      cy.get('.user-login-container > .link').click()
      cy.get('[data-testid="email-input"]').type("sudesaffak@hotmail.com")
      cy.get('[data-testid="password-input"]').type("Sa1360hn")
      cy.get('.q-primary').click()
      //cy.get('[data-testid="user-profile"]').should('be.visible')
    })
  
  })
  