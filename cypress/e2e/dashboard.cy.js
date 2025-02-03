describe("Dashboard Navigation", () => {
    beforeEach(() => {
      cy.visit("/login");
      cy.fixture("users").then((users) => {
        cy.get("input[name='username']").type(users.admin.username);
        cy.get("input[name='password']").type(users.admin.password);
        cy.get("button[type='submit']").click();
      });
    });
  
    it("Should navigate to Borrowers page", () => {
      cy.get("a[href='/borrowers']").click();
      cy.url().should("include", "/borrowers");
    });
  
    it("Should navigate to Loans page", () => {
      cy.get("a[href='/loans']").click();
      cy.url().should("include", "/loans");
    });
  
    it("Should navigate to Payments page", () => {
      cy.get("a[href='/payments']").click();
      cy.url().should("include", "/payments");
    });
  });
  