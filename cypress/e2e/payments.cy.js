import { faker } from '@faker-js/faker';

describe("Loans", () => {
    beforeEach(() => {
        cy.visit("/login");
        cy.fixture("users").then((users) => {
            cy.get("input[name='username']").type(users.admin.username);
            cy.get("input[name='password']").type(users.admin.password);
            cy.get("button[type='submit']").click();
        });

        // Ensure the login is successful before proceeding
        cy.url().should("include", "/home");

        // Navigate to Payments page
        cy.get('ul > :nth-child(4)').should("be.visible").click();
        cy.url().should("include", "/payments");
    });

    it("Should be able to add a Payment", () => {
        cy.wait(2000); // Allow the page to load

        cy.get('.bg-red-500 > a').click();

        // Scroll to and click the Edit button for a disbursed loan
        cy.get(':nth-child(1) > :nth-child(6) > :nth-child(2) > a > [data-testid="VisibilityOutlinedIcon"]')
            .scrollIntoView()
            .should("be.visible")
            .click();

        cy.wait(2000); // Allow the page to load

        // Click the payment button
        cy.get('tr > .flex > .px-4 > a').should("be.visible").click();

        cy.wait(2000); // Allow the payment form to load

        // Generate a random future date
        const collectionDate = faker.date.future(1);
        const formattedDate = collectionDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD

        // Fill in payment details
        cy.get('.grid > :nth-child(2) > .block').type(formattedDate);
        cy.get(':nth-child(3) > .block').type(1000);
        cy.get(':nth-child(4) > .block').type("Cypress test");
        cy.get(':nth-child(7) > .w-auto').click();
    });
});
