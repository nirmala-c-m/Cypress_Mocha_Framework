class RegistrationPage {
  // Locators
  registerLink = '[href="register.php"]';
  firstNameField = '[name="firstName"]';
  lastNameField = '[name="lastName"]';
  phoneField = '[name="phone"]';
  userNameField = '[name="userName"]';
  addressField = '[name="address1"]';
  cityField = '[name="city"]';
  stateField = '[name="state"]';
  countryDropdown = 'select[name="country"]';
  emailField = '[name="email"]';
  passwordField = '[name="password"]';
  confirmPasswordField = '[name="confirmPassword"]';
  submitButton = '[name="submit"]';

  // Methods
  navigateToRegister() {
    cy.get(this.registerLink).should('be.visible').click();
  }

  fillRegistrationForm(user) {
    cy.get(this.firstNameField).should('be.visible').and('be.enabled').type(user.firstName);
    cy.get(this.lastNameField).should('be.visible').and('be.enabled').type(user.lastName);
    cy.get(this.phoneField).should('be.visible').and('be.enabled').type(user.phone);
    cy.get(this.userNameField).should('be.visible').and('be.enabled').type(user.userName);
    cy.get(this.addressField).should('be.visible').and('be.enabled').type(user.address1);
    cy.get(this.cityField).should('be.visible').and('be.enabled').type(user.city);
    cy.get(this.stateField).should('be.visible').and('be.enabled').type(user.state);
    cy.get(this.countryDropdown).select(user.country).should('have.value', 'INDIA');
    cy.get(this.emailField).should('be.visible').and('be.enabled').type(user.email);
    cy.get(this.passwordField).should('be.visible').and('be.enabled').type(user.password);
    cy.get(this.confirmPasswordField).should('be.visible').and('be.enabled').type(user.confirmPassword);
    cy.get(this.submitButton).should('be.visible').click();
  }
}

export default RegistrationPage;
