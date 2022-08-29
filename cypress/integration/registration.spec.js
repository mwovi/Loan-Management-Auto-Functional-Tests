/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe("User account page", () => {
  beforeEach(() => {
    cy.locations("admin", "Admin123");

    cy.eyesOpen({
      appName: "Location Page",
      testName:
        "Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with",
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  //********tests-cases*********

  it("TP00-Should actually be accessible", () => {
    cy.visit(
      "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/registrationAdminDashboard.page?appId=botswanaemr.registrationAdminDashboard"
    );
  });

  it(`TP01-Verifying visibility of the page objects`, () => {
    //applitools eyes test
    cy.eyesCheckWindow({
      tag: "TP01-Verifying visibility of the elements on the page",
      target: "window",
      fully: true,
    });
  });

  it.only(`TP02-Verifying successful registration of emergency patients`, () => {
    cy.contains("button", "Register New Patient").click();

    cy.get("#newPatientCheck").click();

    cy.get("#next").click();

    cy.get("#emergencyCheck").click();

    cy.contains("button", "Next Step").click();

    cy.get("#name").type("Cypress test2").should("have.value", "Cypress test2");

    cy.contains("button", "Complete").click();

    cy.get("#queueRoom")
      .select("Screening Portal")

    cy.contains("button", "Assign Patient").click();

    // cy.get("test2 Cypress").should("be.visible");

  });
});
