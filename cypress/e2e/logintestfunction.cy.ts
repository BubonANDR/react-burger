/// <reference types="cypress" />




export function loginUsingFormTesting(email: string, password: string) {
    
    //cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="loginForm"]')

    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get('[data-cy="loginButton"]').click(); 
    cy.location("pathname").should("not.include","login")
  }