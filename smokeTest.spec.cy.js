describe('Smoke Test', () => {
    it('Ana sayfa öğeleri görünür olmalı', () => {
      // Ana sayfaya git
      cy.visit('https://www.trendyol.com/'); 
      cy.get('#onetrust-accept-btn-handler').click()
      // Başlık kontrolü
      cy.title().should('include', "En Trend Ürünler Türkiye'nin Online Alışveriş Sitesi Trendyol'da"); // Sayfa başlığını kontrol et
  
      // Belirli elementlerin görünür olduğunu kontrol et
      cy.get('.header').should('be.visible'); // Header görünür olmalı
      cy.get('.footer').should('be.visible'); // Footer görünür olmalı
      cy.get('nav').should('be.visible'); // Navigasyon görünür olmalı
    });
  });
  