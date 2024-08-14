/// <reference types="cypress" />
import BookFlightPage from '../page-objects/BookFlightPage'; 
describe('Book Flight', () => {
  beforeEach(() => {
    cy.fixture('loginData.json').as('loginData'); 
    cy.fixture('flightData.json').as('flightData');
  });

  it('should successfully login and book a flight', function () {
    cy.get('@loginData').then((loginData) => {
      loginData.forEach((loginRow) => {
        cy.log(`Testing login with username: ${loginRow.username}`);
        cy.login(loginRow.username, loginRow.password); 

        cy.url().should('include', '/');
        cy.title().should('eq', 'Login: Mercury Tours');

        BookFlightPage.navigateToReservation();

        cy.get('@flightData').then((flightData) => {
          flightData.forEach((flightRow) => {
            cy.log(`Flight Bookinf for : ${loginRow.username}`);
            BookFlightPage.selectFlightDetails(flightRow);
            
          });
        });
      });
    });
  });
});
