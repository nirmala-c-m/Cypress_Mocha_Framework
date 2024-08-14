/// <reference types="cypress" />
import { setup, teardown } from '../page-objects/testBase';
import LoginPage from '../page-objects/LoginPage';
import RegistrationPage from '../page-objects/RegistrationPage'; 
import BookFlightPage from '../page-objects/BookFlightPage';

describe('Login', () => {
  before(() => {
    setup();
  });

  after(() => {
    teardown();
  });


  it('Login', () => {
    const LoginPageObj=new LoginPage();
    LoginPageObj.visit();
    LoginPageObj.fillUsername('admin');
    LoginPageObj.fillPassword('admin');
    LoginPageObj.submit();
  });

  it('Book a flight', () => {
    const LoginPageObj=new LoginPage();
    LoginPageObj.visit();
    LoginPageObj.fillUsername('admin');
    LoginPageObj.fillPassword('admin');
    LoginPageObj.submit();

    cy.title().should('eq', 'Login: Mercury Tours');
    BookFlightPage.navigateToReservation();

    const flightDetails = {
      passCount: '4',
      fromPort: 'Acapulco',
      fromMonth: '7',
      fromDay: '12',
      toPort: 'Acapulco',
      toMonth: '7',
      toDay: '12',
      airline: 'Unified Airlines'
    };

    BookFlightPage.selectFlightDetails(flightDetails);
  });


  it('Register a new user', () => {
    const LoginPageObj=new LoginPage();
    LoginPageObj.visit();
    LoginPageObj.fillUsername('admin');
    LoginPageObj.fillPassword('admin');
    LoginPageObj.submit();
    const RegistrationPageObj = new RegistrationPage();

    const user = {
      firstName: 'Nirmala',
      lastName: 'Menon',
      phone: '8757896540',
      userName: 'nirmsds@sfsf.com',
      address1: '7 B',
      city: 'ottappalam',
      state: 'Kerala',
      country: 'INDIA',
      email: 'nirmala',
      password: '1234',
      confirmPassword: '1234',
    };

    RegistrationPageObj.navigateToRegister();
    RegistrationPageObj.fillRegistrationForm(user);
  });
});
