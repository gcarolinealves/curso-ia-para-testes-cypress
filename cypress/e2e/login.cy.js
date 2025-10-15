/// <reference types="cypress"/>

describe("Login", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/")
        cy.fixture('usuarios').as('credenciais')
    })

    it("Successful login", () => {
        cy.get('@credenciais').then((credenciais) => {
            cy.login(credenciais.usernameCadastrado, credenciais.passwordCadastrado)
            cy.get("#nameofuser").should("be.visible").should("have.text", `Welcome ${credenciais.usernameCadastrado}`)
        });
    });
});
