describe('Home screen', () => {
  before(() => {
    cy.visit('localhost:3000');
  });

  describe('Load home screen', () => {
    it('should render welcoming heading', () => {
      cy.get('h1').should('contain', 'Welcome to this awesome React Redux starter!');
    });
  });

  describe('Navigation', () => {
    it('should navigate to about page', () => {
      cy.get('a').should('have.attr', 'href', '/about').click();
      cy.get('h1').should('contain', "You're on About page!");
    });
  });
});
