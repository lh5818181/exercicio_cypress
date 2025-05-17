describe('teste para a agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Luis')
        cy.get('[type="email"]').type('lh581818@gmail.com')
        cy.get('[type="tel"]').type('11999999999')
        cy.get('.adicionar').click()

        cy.log('Contato adicionado com sucesso')

    })

    it('deve editar um contato existente', () => {
        cy.contains('Luis').parent().find('.sc-iAEyYk > :nth-child(4)')
        
        // cy.get('input[placeholder="Nome"]').clear().type('Luis Henrique')
        // cy.get('button').contains('Salvar').click()
        // cy.contains('Luis Henrique').should('exist')
    })


})