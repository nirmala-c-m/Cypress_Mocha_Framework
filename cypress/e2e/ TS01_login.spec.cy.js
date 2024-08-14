/// <reference types="cypress" />


describe('Login Tests', () => {
  beforeEach(() => {
    cy.fixture('loginData.json').as('loginData');
  });

  it('should log in using each set of data from JSON', function () {
    cy.get('@loginData').then((loginData) => {
      loginData.forEach((loginRow) => {
        // Create a unique test case for each dataset
        cy.log(`Testing login with username: ${loginRow.username}`);
        cy.login(loginRow.username, loginRow.password); 
        cy.url().should('include', '/');
        cy.title().should('eq', 'Login: Mercury Tours');
      });
    });
  });
});

