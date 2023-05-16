/// <reference types="cypress" />

export const testURL="http://localhost:3000/react-burger";
export const buhIngridient='[data-cy="dragitem_643d69a5c3f7b9001cfa093c"]';

describe("service is available", function () {
  it("should to load ingridients and show detail on click", function () {
    cy.visit(testURL);

    cy.get(buhIngridient);
    cy.get(buhIngridient).click();
    cy.get('[data-cy="modalContent"]');
    cy.get('[data-cy="indridientDetail"]');
    cy.get('[data-cy="modalClose"]').click({ timeout: 10000 });
    
  });
});
