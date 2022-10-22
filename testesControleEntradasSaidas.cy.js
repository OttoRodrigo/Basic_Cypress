context('testes de Entradas e Saidas', () => {
    it('testes cenário 3', () => {
        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')

        cy.get('#txtN1').type('Maça')
        cy.get('#txtV1').type(5)
        cy.get('#txtN2').type('Laranja')
        cy.get('#txtV2').type(3)
        cy.get('#txtN3').type('Morango')
        cy.get('#txtV3').type(10)

        cy.get('input').contains('Enviar').click()

        //Assert no total
        cy.get('#lbVTotal').invoke('text').then(val =>{
            expect(val).to.be.equal('Valor Total: 18')
        })

        //Verificar cada um dos campos valor no grid
        cy.get('tbody tr')
        .each(($el, index, $list) =>{
            if(index > 0){
                cy.get($el).find('#pValor')
                .invoke('text').then(val =>{
                    if(index == 1){
                        expect(val).to.be.equal('5')
                    }
                    if(index == 2){
                        expect(val).to.be.equal('3')
                    }
                    if(index == 3){
                        expect(val).to.be.equal('10')
                    }
                })

            }
        })

    });
});