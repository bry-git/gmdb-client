

describe('GMDB integration tests', () => {
    beforeEach(() => {
        cy.reload()
        cy.visit('/')
    });
    it('navigates between different links', () => {
        cy.findByRole('link', {name: /login/i}).click();
        cy.findByRole('textbox', {name: /email address/i})
        cy.get('#formBasicPassword')

        cy.findByRole('link', {name: /home/i}).click();
    })
    it('movie gallery renders a list of movie cards', () => {
        cy.get('[href="/1"] > img')
        cy.get('[href="/2"] > img')
        cy.get('[href="/3"] > img')
        cy.get('[href="/33"] > img')
    })
    it('clicking on a movie card takes you to a details page', () => {
        cy.get('[href="/1"] > img').click();
        cy.findByText(/movie details page/i)
    })
})