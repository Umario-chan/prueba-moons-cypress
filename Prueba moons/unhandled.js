describe('Example to demo conditional testing in cypress', () => {
    it('is doing something very important', (done) => {
          
       
        cy.on('uncaught:exception', (err, runnable) => {
          expect(err.message).to.include('Timed out retrying after')
          cy.log('no se encuentra botón crear cuenta');
          console.log('ano se encuentra botón crear cuenta');
      
          
          done()
          
          
         // return false
        })
      
        // esto causa el error
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click();
        cy.get('#email_create').type('thanos_1991@live.com.mx');
        cy.get('#SubmitCreate2 > span').click();
      })
})