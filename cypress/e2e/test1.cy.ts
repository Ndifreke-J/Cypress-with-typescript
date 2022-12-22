describe('google search', () => {
  it('open google page', () => {
    cy.visit('https://google.com')
  })

  it('should search for akwa ibom state', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation step by step {enter}')
  })
}) 