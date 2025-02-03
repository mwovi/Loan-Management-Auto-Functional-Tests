import { faker } from '@faker-js/faker';

describe("Loans", () => {
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
        cy.get('ul > :nth-child(3)').should("be.visible").click();
        cy.url().should("include", "/loans");
    });

    it("Should be able to add a Loan", () => {
        // Open the loan form
        cy.get('.border-y-2 > .bg-red-500').click();

        // Client ID field: Type a client ID (for simplicity, using a fixed value or a random one)
        const clientId = faker.number.int({ min: 1, max: 20 });
        cy.get(':nth-child(1) > .block').type(clientId); // Client ID field


        // Loan type dropdown: Options - Personal Loan, Salary Loan, Business Loan
        const loanTypes = ['Personal Loan', 'Salary Loan', 'Business Loan'];
        const selectedLoanType = loanTypes[Math.floor(Math.random() * loanTypes.length)];
        cy.get('#type').select(selectedLoanType); // Use cy.select() for dropdowns

        // Loan status dropdown: Options - Approved, Fully Paid, Disbursed, Pending, Declined
        const loanStatuses = ['Approved', 'Fully Paid', 'Disbursed', 'Pending', 'Declined'];
        const selectedStatus = loanStatuses[Math.floor(Math.random() * loanStatuses.length)];
        cy.get('#status').select(selectedStatus); // Use cy.select() for dropdowns

        // Gross loan field: Type a random number for the gross loan amount
        const grossLoan = faker.number.int({ min: 5000, max: 50000 });
        cy.get(':nth-child(4) > .block').type(grossLoan); // Gross loan

        // Balance field: Randomly type in a value (less than the gross loan amount)
        const balance = faker.number.int({ min: 1000, max: grossLoan - 1 });
        cy.get(':nth-child(5) > .block').type(balance); // Balance field

        // Amortization field: Randomly type in a value (based on gross loan and balance)
        const amortization = faker.number.int({ min: 1, max: grossLoan - balance });
        cy.get(':nth-child(6) > .block').type(amortization); // Amortization field

        // Terms dropdown: Options - 1 Month, 2 Months, 3 Months, 4 Months, 5 Months, 6 Months, 12 Months
        const loanTerms = ['1 Month', '2 Months', '3 Months', '4 Months', '5 Months', '6 Months', '12 Months'];
        const selectedTerm = loanTerms[Math.floor(Math.random() * loanTerms.length)];
        cy.get('#terms').select(selectedTerm); // Use cy.select() for dropdowns

        // Date released field: Type in date and time (format: YYYY-MM-DDThh:mm)
        const releaseDate = faker.date.past(1); // Random past date
        const year = releaseDate.getFullYear();
        const month = (releaseDate.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2 digits
        const day = releaseDate.getDate().toString().padStart(2, '0'); // Ensure 2 digits
        const hours = faker.number.int({ min: 0, max: 23 }).toString().padStart(2, '0'); // 2 digits for hours
        const minutes = faker.number.int({ min: 0, max: 59 }).toString().padStart(2, '0'); // 2 digits for minutes
        const formattedDateReleased = `${year}-${month}-${day}T${hours}:${minutes}`; // Format: YYYY-MM-DDThh:mm

        cy.get(':nth-child(8) > .block').type(formattedDateReleased); // Type the date and time

        // Move to the next field (maturity date)
        cy.get(':nth-child(8) > .block').tab(); // Move to the next field
        cy.get(':nth-child(9) > .block').tab(); // Move to the next field (maturity date)

        // Maturity date field: Type the maturity date (format: YYYY-MM-DD)
        const maturityDate = faker.date.future(1); // Random future date
        const maturityYear = maturityDate.getFullYear();
        const maturityMonth = (maturityDate.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2 digits
        const maturityDay = maturityDate.getDate().toString().padStart(2, '0'); // Ensure 2 digits
        const formattedMaturityDate = `${maturityYear}-${maturityMonth}-${maturityDay}`; // Format: YYYY-MM-DD

        cy.get(':nth-child(9) > .block').type(formattedMaturityDate); // Type the maturity date
        cy.get(':nth-child(9) > .block').tab(); // Move to the next field

        // Submit the form
        cy.get('.w-auto').click(); // Add New Loan button
    });
});
