/// <reference types="cypress" />

describe("service is available", function () {
  it("should to load ingridients and show detail on click", function () {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="dragitem_643d69a5c3f7b9001cfa093c"]');
    cy.get('[data-cy="dragitem_643d69a5c3f7b9001cfa093c"]').click();
    cy.get('[data-cy="modalContent"]');
    cy.get('[data-cy="indridientDetail"]');
    cy.get('[data-cy="modalClose"]').click({ timeout: 10000 });
  });
});
