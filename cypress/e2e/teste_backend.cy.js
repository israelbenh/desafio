describe('Testando API do backend', () => {
    it('Deve retornar status 200 na rota principal', () => {
      cy.request('http://localhost:8080')
        .its('status')
        .should('eq', 200);
    });
  });
  