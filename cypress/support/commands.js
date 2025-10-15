Cypress.Commands.add('login', (username, password) => {
    cy.get("#login2").click()
    cy.get("#loginusername").should('be.visible').type(username, {force: true})
    cy.get("#loginpassword").should('be.visible').type(password, {force: true})
    cy.contains('button', 'Log in').click()
});
