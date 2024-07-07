describe("fundamentals test", () => {
  // it("passes", () => {
  //   cy.visit("https://example.cypress.io");
  // });
  // //
  // it("teste", () => {
  //   cy.visit("http://gooogle.com");
  //   cy.get();
  //   cy.get("[elemento]").should("have.length", 3);
  //   cy.get("form").find("input").should("not.have.class", "disabled");
  //   cy.get(["data"]).invoke("").should("not.be.visible");
  //   cy.get(":radio").should("have.length", 2);
  // });
  beforeEach(() => {
    cy.visit("fundamentals");
  });

  it("visita front ", () => {
    cy.get('[data-test="fundamentals-header"]').contains(
      /Testing Fundamentals/i
    );

    cy.get('[data-test="fundamentals-header"]').should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  it("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );

    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();

    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );

    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();

    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
  //implementar com comandos ...
  it("Contais correct header", () => {
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });
});
