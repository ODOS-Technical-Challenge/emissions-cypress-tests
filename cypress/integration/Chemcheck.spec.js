/// <reference types="cypress" />

describe('Empty TestSearch Test', () => {
    

    //beforeEach(() => {
        //cy.viewport(1280,720)
        //cy.visit('http://react-tsa-microservice.dev.odos-tc.demoriva.com/login')

    //})

    it('test two',   () => {  
        //cy.on('uncaught exception', (err, runnable) => { 
         //expect(err.message).to.include('Unexpected token <')   
         //done()
         //return false})
        
        cy.visit('http://react-emissions.dev.odos-tc.demoriva.com/home')
        
        cy.get('[data-testid="textInput"]').type('88210')

        cy.get('button > .usa-icon').click()

        cy.get('[style="display: flex; justify-content: flex-end; width: 75vw; margin: 8px auto;"] > [data-testid="textInput"]').type('light headedness')
        
        cy.pause()
        
        cy.visit('http://react-emissions.dev.odos-tc.demoriva.com/engineer')

        cy.get('[data-testid="textInput"]').type('88210')

        cy.get('[data-testid="dropdown"]').select('Air')

        cy.pause()

        cy.visit('http://react-emissions.dev.odos-tc.demoriva.com/researcher?search=gas')

        cy.get('[data-testid="textInput"]').type('gas')

        cy.pause()

        cy.get('[data-testid="button"]').click()




        
        })
        
    

    
    })
