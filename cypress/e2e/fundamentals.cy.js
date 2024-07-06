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

  it("visita front ", () => {
    cy.visit("http://localhost:3000/fundamentals");
    cy.get('[data-test="fundamentals-header"]').contains(
      /Testing Fundamentals/i
    );
  });
});
