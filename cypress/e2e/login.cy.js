/// <reference types="cypress"/>

describe("Login", () => {
    beforeEach(() => {
        cy.visit("https://www.demoblaze.com/")
        cy.fixture('users').as('credentials')
    })

    it("Successful login", () => {
        cy.get('@credentials').then((credentials) => {
            cy.login(credentials.validUsername, credentials.validPassword)
            cy.get("#nameofuser").should("be.visible").should("have.text", `Welcome ${credentials.validUsername}`)
        });
    })

    it("Invalid password", () => {
        cy.get('@credentials').then((credentials) => {
            cy.login(credentials.validUsername, credentials.invalidPassword)
            cy.on('window:alert', (alertText) => { expect(alertText).to.eq("Wrong password."); });
        });
    })

    it("Empty fields ", () => {
        cy.get("#login2").click()
        cy.contains('button', 'Log in').click()    
        cy.on('window:alert', (alertText) => { expect(alertText).to.eq("Please fill out Username and Password."); });
    })
})