

describe('GMDB', () => {
    beforeEach(() => {
        cy.reload()
        cy.visit('/')
    });
    it('navigates between different links', () => {
        cy.findByRole('link', {name: /login/i}).click();
        cy.findByRole('textbox', {name: /email address/i})
        cy.get('#formBasicPassword')

        cy.findByRole('link', {name: /home/i}).click();
        cy.findByText(/Movie Gallery/i)
    })
})