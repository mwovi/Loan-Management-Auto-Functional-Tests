import { faker } from '@faker-js/faker';

describe("Borrowers", () => {
    let firstName, lastName;

    beforeEach(() => {
        cy.visit("/login");
        cy.fixture("users").then((users) => {
            cy.get("input[name='username']").type(users.admin.username);
            cy.get("input[name='password']").type(users.admin.password);
            cy.get("button[type='submit']").click();
        });

        // Ensure the login is successful before proceeding
        cy.url().should("include", "/home");

        // Navigate to Borrowers page once before each test
        cy.get(':nth-child(2) > .ml-2\\.5').should("be.visible").click();
        cy.url().should("include", "/borrowers");
    });

    it("Should be able to add a Borrower", () => {
        // Generate random data using faker
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        const email = faker.internet.email(firstName, lastName);
        const username = faker.internet.userName(firstName, lastName);
        const phoneNumber = `07${faker.number.int({ min: 1000000, max: 9999999 })}`;
        const address = `${faker.address.streetAddress()}, ${faker.address.city()}, Kenya`;

        cy.get('.border > a').should("be.visible").click(); // Update selector
        cy.get('[name="firstname"]').type(firstName);
        cy.get('[name="lastname"]').type(lastName);
        cy.get('[type="number"]').type(phoneNumber);
        cy.get('[name="address"]').type(address);
        cy.get('[type="email"]').type(email);
        cy.get('[name="username"]').type(username);
        cy.get('[type="submit"]').click();

        cy.wait(3000);
        // Verify borrower was added
        cy.contains(`${firstName} ${lastName}`).scrollIntoView().should("be.visible");
    });

    // it("should be able to view a borrower's info", () => {
    //     // Get all rows in the table
    //     cy.get('table tr').should('have.length.greaterThan', 1).last().within(() => {
    //         // Find the action button in the last row
    //         cy.get('td:last-child button').scrollIntoView().click();
    //     });

    //     // Verify that the borrower's details page is loaded
    //     // cy.url().should("include", `/borrowers/${username}`); // Adjust the URL pattern to match your system
    //     // cy.contains(firstName).should("be.visible");
    //     // cy.contains(lastName).should("be.visible");
    //     // cy.contains(phoneNumber).should("be.visible");
    //     // cy.contains(address).should("be.visible");
    //     // cy.contains(email).should("be.visible");
    //     // cy.contains(username).should("be.visible");
    // });
});
