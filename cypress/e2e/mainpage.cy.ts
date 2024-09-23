describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('opens a page and contains all needeed logic', () => {
    cy.visit('http://localhost:5173/');

    cy.findByText('Uppercase Letters').should('exist');
    cy.findByText('Lowercase Letters').should('exist');
    cy.findByText('Numbers').should('exist');
    cy.findByText('Symbols').should('exist');
    cy.findByRole('button', { name: 'Copy Password_' }).should('exist');
  });

  it('creates a password if user clicks on the one of checkboxes with slider', () => {
    cy.findByText('Numbers').should('exist').click({ force: true });

    cy.findByRole('slider').click({ force: true });
    cy.get("[data-testid='password-input']").within(($input) => {
      cy.wrap($input).invoke('val').should('match', /\d/);
    });
  });

  it('creates a password with a numbers and symbols if user clicks on the all checkboxes', () => {
    cy.findByText('Numbers').should('exist').click();

    cy.findByRole('slider').click();
    cy.get("[data-testid='password-input']").within(($input) => {
      cy.wrap($input).invoke('val').should('match', /\d/);
      cy.wrap($input).invoke('val').should('match', /\d/);
      cy.wrap($input).invoke('val').should('match', /[a-z]/);
      cy.wrap($input).invoke('val').should('match', /[A-Z]/);
    });
  });
});
