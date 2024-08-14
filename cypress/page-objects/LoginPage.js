class LoginPage {
  // Locators
  usernameField = '[name="userName"]';
  passwordField = '[name="password"]';
  submitButton = '[name="submit"]';
  baseUrl = 'https://demo.guru99.com/test/newtours/';

  // Methods
  visit() {
    cy.visit(this.baseUrl);
  }

  fillUsername(username) {
    cy.get(this.usernameField)
      .should('be.visible')
      .and('be.enabled')
      .clear()
      .type(username);
    return this; // Return this for method chaining
  }

  fillPassword(password) {
    cy.get(this.passwordField)
      .should('be.visible')
      .and('be.enabled')
      .clear()
      .type(password);
    return this; // Return this for method chaining
  }

  submit() {
    cy.get(this.submitButton)
      .should('be.visible')
      .click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default LoginPage;
