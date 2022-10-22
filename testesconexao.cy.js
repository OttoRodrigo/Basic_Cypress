context('Testes de Conexão', () => {
    it('teste CalcSimples e EntradasSaidas', () => {
        cy.visit('https://localhost:44360/CalcSimples.aspx')

        cy.get('#txtN1').type(5)
        cy.get('#txtN2').type(5)
        cy.get('#rbFuncao_2').click()
        cy.get('#btnCalcular').click()
        cy.get('input').contains('Limpar').click()

        cy.get('#txtN1').type(5)
        cy.get('#txtN2').type(5)
        cy.get('#btnCalcular').click()
        cy.get('input').contains('Limpar').click()

        cy.get('#txtN1').type(6)
        cy.get('#txtN2').type(5)
        cy.get('#rbFuncao_1').click()
        cy.get('#btnCalcular').click()
        cy.get('input').contains('Limpar').click()

        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')

        cy.get('#txtN1').type('Teste1')
        cy.get('#txtV1').type(20)
        cy.get('#txtN2').type('Teste2')
        cy.get('#txtV2').type(10)
        cy.get('#txtN3').type('Teste3')
        cy.get('#txtV3').type(1)

        cy.get('input').contains('Enviar').click()

        cy.get('#lbVTotal').invoke('text').then(val =>{
            expect(val).to.be.equal('Valor Total: 31')
        })

        cy.get('#txtV1').invoke('prop','value').then(valinput =>{
            //expect(val).to.be.equal('25')
            cy.get('tbody tr')
            .each(($el, index, $list) =>{
                if(index > 0){
                    cy.get($el).find('#pValor')
                    .invoke('text').then(valgrid =>{
                        if(index == 1){
                            expect(valgrid).to.be.equal(valinput)
                        }
                    })

                }
        })
        })

        
    });
});