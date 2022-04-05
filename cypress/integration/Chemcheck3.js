/// <reference types="cypress" />

describe('Chemcheck 3 Test', () => {
    

    it('test drei',   () => { 
        
        cy.visit('http://react-emissions.dev.odos-tc.demoriva.com/home')
        
        cy.get('[data-testid="textInput"]').type('88210')

        cy.get('button > .usa-icon').click()
        
        cy.get('[style="display: flex; justify-content: flex-end; width: 75vw; margin: 8px auto;"] > [data-testid="textInput"]').type('toxic')

        cy.get('[style="width: 240px; color: rgb(255, 176, 32);"]').contains('toxic')
          //.should('have.value','toxic')

        //cy.get('[style="display: flex; justify-content: flex-end; width: 75vw; margin: 8px auto;"] > [data-testid="textInput"]').type('rot')

        //cy.get('[style="width: 240px; color: rgb(255, 176, 32);"]')
         // .should('have.text',' Potentially toxic in large doses.')   

        
        })
    it('test vier',   () => { 
        
        cy.visit('http://react-emissions.dev.odos-tc.demoriva.com/home')
            
        cy.get('[data-testid="textInput"]').type('88210')
    
        cy.get('button > .usa-icon').click()
            
        cy.get('[style="display: flex; justify-content: flex-end; width: 75vw; margin: 8px auto;"] > [data-testid="textInput"]').type('rot')
    
        cy.get('[style="width: 240px; color: rgb(255, 176, 32);"]').contains('rot')
        //.should('have.value','toxic')
    
            
    
             
    
    
           
    
            
        })    
    

    
    })
