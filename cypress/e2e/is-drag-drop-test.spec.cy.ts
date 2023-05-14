/// <reference types="cypress" />

import { loginUsingFormTesting } from "./logintestfunction.cy";

describe("Drag and Drop and make order", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
 
  
  it("should drag ingrids to the order", () => {
    const dataTransfer = new DataTransfer();
       
    cy.get('[data-cy="dragitem_643d69a5c3f7b9001cfa093f"]').trigger(
      "dragstart",
      {
        dataTransfer,
      }
    );

    cy.get('[data-cy="dropTarget"]').trigger("drop", {
      dataTransfer,
    });

    cy.get('[data-cy="dragitem_643d69a5c3f7b9001cfa093c"]').trigger(
      "dragstart",
      {
        dataTransfer,
      }
    );
    cy.get('[data-cy="dropTarget"]').trigger("drop", {
      dataTransfer,
    });
    cy.get('[data-cy="orderButton"]');
    cy.get('[data-cy="orderButton"]').click();
    cy.location("pathname").should('include',"login");
    loginUsingFormTesting("bubonandr@yandex.ru","qwerty");
    cy.get('[data-cy="orderButton"]');
    cy.get('[data-cy="orderButton"]').click();
    cy.get('[data-cy="orderNumber"]')

  });
});
