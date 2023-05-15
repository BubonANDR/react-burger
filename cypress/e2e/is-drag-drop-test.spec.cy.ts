/// <reference types="cypress" />

import { buhIngridient, testURL } from "./is-avalible.spec.cy";

const orderButton = '[data-cy="orderButton"]';
const mainIngridient = '[data-cy="dragitem_643d69a5c3f7b9001cfa093f"]';

function loginUsingFormTesting(email: string, password: string) {
  cy.get('[data-cy="loginForm"]');
  cy.get("input[name=email]").type(email);
  cy.get("input[name=password]").type(password);
  cy.get('[data-cy="loginButton"]').click();
  cy.location("pathname").should("not.include", "login");
}

describe("Drag and Drop and make order", () => {
  beforeEach(() => {
    cy.visit(`${testURL}/login`);
  });

  it("should drag ingrids to the order", () => {
    const dataTransfer = new DataTransfer();
    cy.location("pathname").should("include", "login");
    loginUsingFormTesting("bubonandr@yandex.ru", "qwerty");
    cy.visit(`${testURL}`);
    cy.get(mainIngridient).trigger("dragstart", {
      dataTransfer,
    });

    cy.get('[data-cy="dropTarget"]').trigger("drop", {
      dataTransfer,
    });

    cy.get(buhIngridient).trigger("dragstart", {
      dataTransfer,
    });
    cy.get('[data-cy="dropTarget"]').trigger("drop", {
      dataTransfer,
    });
    cy.get(orderButton);
    cy.get(orderButton).click();

    cy.get('[data-cy="orderNumber"]', { timeout: 16000 });
  });
});
