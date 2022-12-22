
it('assertion test', () => {
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    // Implicit Assertions
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class','query-btn')
        .should('be.visible')
        .should('be.enabled')

    cy.get('#query-btn')
        .invoke('attr', 'id')
        .should('equal', 'query-btn')
    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')
    
    // Explicit Assertion
    // expect
    expect(true).to.be.true

    var name = 'ndifreke'
    expect(name).to.be.equal('ndifreke')

    // assert
    assert.equal(4,4, 'not equal')
    assert.strictEqual(4, 4, 'Not Strictly Equal')

})