import Tools from "../../support/tools"
const tools = new Tools()
let Password = tools.generateRandomString(8)
context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://demowebshop.tricentis.com/register')
    })

    // https://on.cypress.io/interacting-with-elements

    it.skip('regitrai berhasil', () => {
        // https://on.cypress.io/type
        cy.get('#gender-male').click()
        // cy.get('#gender-female').should('have.value', 'fake@email.com')

        // .type() with special character sequences
        cy.get('#FirstName').type(`${tools.generateRandomString(6)}`, { delay: 100 })
        cy.get('#LastName').type(`${tools.generateRandomString(8)}`)
        cy.get('#Email').type(`${tools.generateRandomString(8)}@email.com`)
        cy.get('#Password').type(Password)
        cy.get('#ConfirmPassword').type(Password)
        cy.get('#register-button').click()
        cy.wait(5000);
        cy.get('.result').should('contain', 'Your registration completed')
    })

    it('regitrai gagal', () => {
        // https://on.cypress.io/type
        cy.get('#gender-male').click()
        // cy.get('#gender-female').should('have.value', 'fake@email.com')

        // .type() with special character sequences
        // cy.get('#FirstName').type(`${tools.generateRandomString(6)}`, { delay: 100 })
        // cy.get('#LastName').type(`${tools.generateRandomString(8)}`)
        cy.get('#Email').type(`${tools.generateRandomString(8)}@email.com`)
        cy.get('#Password').type(Password)
        cy.get('#ConfirmPassword').type(Password)
        cy.get('#register-button').click()
        cy.get(':nth-child(2) > .field-validation-error > span').to.contain("Last name is required")

    })

})