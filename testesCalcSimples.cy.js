context('Calculos Calc Simples', () => {
    it('cenario1', () => {
        cy.visit('https://localhost:44360/CalcSimples.aspx')

        //Parte1-1
        cy.get('#txtN1').type(1)
        cy.get('#txtN2').type(12)
        cy.get('#btnCalcular').click()
        //Parte 2-1
        //Formula
        cy.get('#lbFormulaCalculo').invoke('text').then(texto =>{
            expect(texto).to.be.equal('1 + 12')
        })
        //Resultado
        cy.get('#lbResultado').invoke('text').then(valortexto =>{
            expect(valortexto).to.be.equal('13')
        })
        
        cy.get('input').contains('Limpar').click()



        //Parte 1-2
        cy.get('#txtN1').type(25)
        cy.get('#txtN2').type(5)
        cy.get('#rbFuncao_1').click()
        cy.get('#btnCalcular').click()
        cy.get('input').contains('Limpar').click()

        //Parte 1-3
        cy.get('#txtN1').type(5)
        cy.get('#txtN2').type(5)
        cy.get('#rbFuncao_2').click()
        cy.get('#btnCalcular').click()
        cy.get('input').contains('Limpar').click()

        //Parte 1-4
        cy.get('#txtN1').type(2)
        cy.get('#txtN2').type(2)
        cy.get('#rbFuncao_3').click()
        cy.get('#btnCalcular').click()
    });
});