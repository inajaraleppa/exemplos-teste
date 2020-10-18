describe('Creditas login page', () => {
  it('show error message when enter an CPF that is not registered yet', () => {
    cy.viewport('macbook-13')
    cy.visit('https://app-staging.creditas.com/login')

    cy.get('[data-testid="CPF ou Email"]')
      .type('08537880060')

    cy.get('[data-testid="submit"]').click()

    cy.get('[data-testid="feedbackMessage"]').should('contain', 'CPF ou e-mail inválido.')
  })
})