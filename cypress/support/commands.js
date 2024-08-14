import LoginPage from '../page-objects/LoginPage';

const loginPage = new LoginPage();
Cypress.Commands.add('login', (username, password) => { 
    loginPage.visit();
    loginPage.fillUsername(username);
    loginPage.fillPassword(password);
    loginPage.submit();
});



