Cypress.Commands.add('register', (email, password, confirmPassword) => {
    cy.visit('/register');
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(confirmPassword);
    cy.get('button[type="submit"]').click();
  });
