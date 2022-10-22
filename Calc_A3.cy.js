context('testesCalcSimples', () => {

    before(() => {
        cy.visit('https://localhost:44360/CalcSimples.aspx')
    });

    afterEach(() => {
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()
    });

    it('calc1+2', () => {

        cy.get('#txtN1').type(1)
        cy.get('#txtN2').type(2)
    });

    it('calc134+234', () => {

        cy.get('#txtN1').type(134)
        cy.get('#txtN2').type(234)
    });

    it('calc10000+-2346', () => {

        cy.get('#txtN1').type(10000)
        cy.get('#txtN2').type(-2346)
    });

    it('calc-45-45', () => {

        cy.get('#txtN1').type(-45)
        cy.get('#rbFuncao_1')
        cy.get('#txtN2').type(45)
    });

    it('calc100-34', () => {

        cy.get('#txtN1').type(100)
        cy.get('#rbFuncao_1')
        cy.get('#txtN2').type(34)
    });

    it('calc-2x6', () => {

        cy.get('#txtN1').type(-1)
        cy.get('#rbFuncao_2')
        cy.get('#txtN2').type(6)
    });

    it('calc-999x78', () => {

        cy.get('#txtN1').type(999)
        cy.get('#rbFuncao_2')
        cy.get('#txtN2').type(78)
    });

    it('calc36/1', () => {

        cy.get('#txtN1').type(36)
        cy.get('#rbFuncao_3')
        cy.get('#txtN2').type(1)
    });

    it('calc160/20', () => {

        cy.get('#txtN1').type(160)
        cy.get('#rbFuncao_3')
        cy.get('#txtN2').type(20)
    });


});