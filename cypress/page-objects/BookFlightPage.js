class BookFlightPage {
  // Locators
  reservationLink = '[href="reservation.php"]';
  roundTripRadio = '[value="roundtrip"]';
  oneWayRadio = '[value="oneway"]';
  passengerCountDropdown = 'select[name="passCount"]';
  fromPortDropdown = 'select[name="fromPort"]';
  fromMonthDropdown = 'select[name="fromMonth"]';
  fromDayDropdown = 'select[name="fromDay"]';
  toPortDropdown = 'select[name="toPort"]';
  toMonthDropdown = 'select[name="toMonth"]';
  toDayDropdown = 'select[name="toDay"]';
  coachClassRadio = '[value="Coach"]';
  businessClassRadio = '[value="Business"]';
  airlineDropdown = 'select[name="airline"]';
  findFlightsButton = '[name="findFlights"]';

  // Methods
  navigateToReservation() {
    cy.get(this.reservationLink).should('be.visible').click();
  }

  selectFlightDetails(flightDetails) {
    cy.get(this.roundTripRadio).should('be.checked');
    cy.get(this.oneWayRadio).should('be.visible').should('not.be.checked').click();
    cy.get(this.passengerCountDropdown).select(flightDetails.passCount);
    cy.get(this.fromPortDropdown).select(flightDetails.fromPort);
    cy.get(this.fromMonthDropdown).select(flightDetails.fromMonth);
    cy.get(this.fromDayDropdown).select(flightDetails.fromDay);
    cy.get(this.toPortDropdown).select(flightDetails.toPort);
    cy.get(this.toMonthDropdown).select(flightDetails.toMonth);
    cy.get(this.toDayDropdown).select(flightDetails.toDay);
    cy.get(this.coachClassRadio).should('be.visible').and('be.checked');
    cy.get(this.businessClassRadio).should('be.visible').and('not.be.checked').click();
    cy.get(this.airlineDropdown).select(flightDetails.airline);
    cy.get(this.findFlightsButton).should('be.visible').click();
  }
}

export default new BookFlightPage();
