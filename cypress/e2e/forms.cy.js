describe("form test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subscribe form ", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("tyluis20@gmail.com");
    cy.contains(/Successfully subbed: tyluis20@gmail.com/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: tyluis20@gmail.com/i);
    cy.contains(/Successfully subbed: tyluis20@gmail.com/i).should("exist");
    cy.wait(3000);

    cy.contains(/Successfully subbed: tyluis20@gmail.com!/i).should(
      "not.exist"
    );
    cy.get("@subscribe-input").type("tyluis20@gmail");
    cy.getDataTest("subscribe-button").click();

    cy.contains(/Invalid email: tyluis20@gmail!/i).should("exist");

    cy.wait(3000);
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail/i).should("exist");
  });
});
