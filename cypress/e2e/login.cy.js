describe("Login Functionality", () => {
    beforeEach(() => {
      cy.visit("/login"); // Go to login page
    });
  
    it("Should display login form", () => {
      cy.get("input[name='username']").should("be.visible");
      cy.get("input[name='password']").should("be.visible");
      cy.get("button[type='submit']").should("be.visible");
    });
  
    it("Should show error on invalid login", () => {
      cy.get("input[name='username']").type("wrongUser");
      cy.get("input[name='password']").type("wrongPass");
      cy.get("button[type='submit']").click();
  
      cy.contains("Username or password is wrong").should("be.visible");
    });
  
    it("Should login successfully", () => {
      cy.fixture("users").then((users) => {
        cy.get("input[name='username']").type(users.admin.username);
        cy.get("input[name='password']").type(users.admin.password);
        cy.get("button[type='submit']").click();
      });
  
      cy.url().should("include", "/home");
    });
  });
  