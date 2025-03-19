describe('Registro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('Deve exibir erro ao enviar o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('E-mail é obrigatório').should('be.visible');
    cy.contains('Senha é obrigatória').should('be.visible');
    cy.contains('Confirmação de senha é obrigatória').should('be.visible');
  });

  it('Deve exibir erro se as senhas não coincidirem', () => {
    cy.register('teste@teste.com', 'senha123', 'senha456');
    cy.contains('As senhas não coincidem').should('be.visible');
  });

  it('Deve registrar um usuário com sucesso', () => {
    const email = `usuario${Date.now()}@teste.com`;
    cy.register(email, 'senha123', 'senha123');
    cy.contains('Registro realizado com sucesso').should('be.visible');
  });

  it('Deve exibir erro ao tentar registrar um e-mail já cadastrado', () => {
    const email = 'usuarioexistente@teste.com';
    cy.register(email, 'senha123', 'senha123');
    cy.contains('E-mail já cadastrado').should('be.visible');
  });

  it('Deve permitir login após registro bem-sucedido', () => {
    const email = `usuario${Date.now()}@teste.com`;
    cy.register(email, 'senha123', 'senha123');
    cy.contains('Registro realizado com sucesso').should('be.visible');
    cy.visit('/login');
    cy.get('#email').type(email);
    cy.get('#password').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('Bem-vindo').should('be.visible');
  });
});
