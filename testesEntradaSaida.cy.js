context('ControleEntradasSaidas', () => {
    it('adicionar2registros', () => {
        //Adicionar os 2 registros
        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')

        cy.get('#txtN1').type('Carro')
        cy.get('#txtV1').type(25000)

        cy.get('#txtN2').type('Moto')
        cy.get('#txtV2').type(3000)
        
        cy.get('input').contains('Enviar').click()

        cy.get('table tbody tr').should('have.length', 3)

        cy.get('tbody tr')
        .each(($el, index, $list) => {
            if(index == 1)
            cy.get($el).find('#pValor')
            .invoke('text').then(val1 =>{
                expect(val1).to.equal('25000')
            })
        })

    });
});