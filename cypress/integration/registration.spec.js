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

  // afterEach(() => {
  //   cy.eyesClose();
  // });

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

  it(`TEST 2-Verifying successful registration of EMERGENCY patients`, () => {
    cy.contains("button", "Register New Patient").click();

    cy.get("#newPatientCheck").click();

    cy.get("#next").click();

    cy.get("#emergencyCheck").click();

    cy.contains("button", "Next Step").click();

    cy.get("#name").type("Cypress test").should("have.value", "Cypress test");

    cy.contains("button", "Complete").click();

    cy.get("#queueRoom").select("Screening Portal");

    cy.contains("button", "Assign Patient").click();

    // cy.get("test Cypress").should("be.visible");
  });

  it(`TEST 3-Verifying successful registration of REGULAR patients`, () => {
    cy.contains("button", "Register New Patient").click();

    cy.get("#newPatientCheck").click();

    cy.get("#next").click();

    cy.get("#regularCheck").click();

    cy.contains("button", "Next Step").click();

    cy.get("#patientId").type("622119123").should("have.value", "622119123");
    cy.wait(5000);

    cy.get("#givenName").type("Cypress").should("have.value", "Cypress");

    cy.wait(1000);

    cy.get("#familyName").type("Test").should("have.value", "Test");
    cy.wait(1000);

    cy.get("#gender").should("have.value", "Male");

    cy.get("#dateOfBirth").type("2000-03-03");

    cy.wait(1000);

    cy.get("#email")
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");

    cy.wait(1000);

    cy.get("#phoneNumber").type("06123456").should("have.value", "06123456");

    cy.get("#occupation").select("Engineer");
    cy.get("#education").select("Junior high school education");
    cy.get("#employer")
      .type("Botswana Government")
      .should("have.value", "Botswana Government");

    cy.get("#homeAddress")
      .type("23, kinanda, kgotla, southern, Gaborone")
      .should("have.value", "23, kinanda, kgotla, southern, Gaborone");

    cy.get("#address2").select("Kweneng").should("have.value", "Kweneng");
    cy.get("#address3").type("Gaborone").should("have.value", "Gaborone");
    cy.wait(1000);

    cy.contains("button", "Next Step").click();

    // Next of Kin
    cy.wait(1000);

    cy.get("#nextOfKinType").click();
    cy.get("#nokIdNumber").type("112229056").should("have.value", "112229056");
    cy.wait(10000);

    cy.get("#nokFullName").type("Jane Doe").should("have.value", "Jane Doe");

    cy.wait(1000);

    cy.get("#nokRelationship").select("Mother");

    cy.wait(2000);

    cy.get("#nokContact").type("07123456").should("have.value", "07123456");

    cy.wait(2000);

    cy.get("#nokEmail")
      .type("Janedoe@gmail.com")
      .should("have.value", "Janedoe@gmail.com");

    cy.wait(1000);

    cy.get("#nokHomeAddress")
      .type("23, kinanda, kgotla, southern, Gaborone")
      .should("have.value", "23, kinanda, kgotla, southern, Gaborone");

    cy.get("#nokAddress2").select("Kweneng").should("have.value", "Kweneng");
    cy.get("#nokAddress3").type("Gaborone").should("have.value", "Gaborone");

    cy.contains("button", "Next step").click();
    cy.contains("button", "Save & Register").click();

    cy.get("#amount").type("5").should("have.value", "5");

    cy.get("#paymentMade").click();

    cy.get("#paymentMethod").select("Cash");

    cy.contains("button", "Next").click();

    cy.get("#queueRoom").select("Screening Portal");

    cy.contains("button", "Assign Patient").click();
  });

  it(`TEST 4-Verifying successful registration of EXISTING patient`, () => {
    cy.contains("button", "Register New Patient").click();

    cy.get("#existingPatientCheck").click();

    cy.get("#find-patients").type("cypress");

    cy.focused().type("{enter}");

    cy.contains("Cypress test1").click();

    cy.get("#queueRoom").select("Screening Portal");

    cy.contains("button", "Assign Patient").click();
  });
});
