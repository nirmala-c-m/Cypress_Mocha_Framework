/// <reference types="cypress" />
import RegistrationPage from '../page-objects/RegistrationPage'; 

describe('Registration', () => {
  beforeEach(() => {
    cy.fixture('loginData.json').as('loginData'); 
    cy.fixture('registerData.json').as('registerData'); 
  });

  it('should successfully register a new user', function () {
    cy.get('@loginData').then((loginData) => {
      cy.get('@registerData').then((registerData) => {
        loginData.forEach((loginRow, index) => {
          // Check if the registration data is available for the current login iteration
          const registerRow = registerData[index % registerData.length]; // Cycle through register data if fewer entries

          cy.log(`Testing login with username: ${loginRow.username}`);
          cy.login(loginRow.username, loginRow.password); 
          cy.url().should('include', '/');
          cy.title().should('eq', 'Login: Mercury Tours');

          const registrationPage = new RegistrationPage(); 
          registrationPage.navigateToRegister();

          cy.log(`Testing registration with username: ${registerRow.userName}`);
          registrationPage.fillRegistrationForm(registerRow); 
        });
      });
    });
  });
});

