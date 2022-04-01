/// <reference types="cypress" />

describe('Chemcheck 2 Test', () => {
    

    it('test zwei',   () => { 
        
        cy.visit('http://react-emissions.dev.odos-tc.demoriva.com/home')
        
        cy.get('[data-testid="textInput"]').type('88210')

        cy.get('button > .usa-icon').click()

        cy.get('[style="display: flex; align-items: center; justify-content: center; margin: 0px auto; width: 100%; background-color: rgb(37, 94, 162);"] > [value="88210"]')
          .should('exist')


       

        
        })
        
    

    
    })
