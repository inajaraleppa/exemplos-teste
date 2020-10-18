describe('Creditas website', () => {
  it('redirects to beneficios page when clicking on Para empresas link', () => {
    cy.viewport('macbook-13')
    cy.visit('https://staging.creditas.com/')

    cy.contains('Para empresas').click()

    cy.url().should('include', '/beneficios')
  })
})