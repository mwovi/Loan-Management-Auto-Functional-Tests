/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

import {firstName, familyName} from './registration.spec.js';

describe("User account page", () => {
    beforeEach(() => {
        cy.locations("admin", "Y3z44AH2");

        cy.eyesOpen({
            appName: "Location Page",
            testName:
                "Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with",
        });
    });

    afterEach(() => {
        cy.eyesClose();
    });



    it(`TP01-Access Consultation portal`, () => {

        cy.get('#selected-location').click();
        cy.contains('Consultation').click()
        cy.url().should("contain", "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/consultation/doctorsPatientPoolDashboard.page?appId=botswanaemr.auxilliaryNurseDashboard");


        cy.contains('td', familyName+ ' ' + firstName)  // gives you the cell 
            .siblings()                            // gives you all the other cells in the row
            .contains('a', 'Resume treating')               // finds the delete button
            .click()

        // cy.get('#beginConsulations').click();

        // cy.wait(2000);
        // cy.get('#description').type('This is a test');
        // cy.get('#complete').click();

        cy.get('#assessment-tab').click();
        cy.contains('+ Add diagnosis').click()

        cy.get('#btnAddDiagnosis').click();

        cy.get('#newDiagnosis > :nth-child(1) > .form-control').type('Malaria');
        cy.get('#newDiagnosis > :nth-child(2) > .custom-select').select('Confirmed');
        cy.get('#newDiagnosis > :nth-child(3) > #diagnosisTypetype').select('New');
        cy.get('#editDiagnoses > .button-section-right > .btn-primary').click();

        

    })

})