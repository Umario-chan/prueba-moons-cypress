describe('Registro de usuario', function(){
    it('registro', function(){
        //1. ingreso al sitio
        cy.visit('http://automationpractice.com/index.php')

        //2. ingreso al form de registro
        cy.get('.login').click();
        cy.get('#email_create').type('thanos_1989uth@live.com.mx');
        cy.get('#SubmitCreate > span').click();
        cy.wait(6000);

        //3. llenado de formulario de registro
        //información personal
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type('Mario');
        cy.get('#customer_lastname').type('de la Rosa');
        cy.get('#passwd').type('contraseñ@89');
        cy.get('#days').select('29');
        cy.get('#months').select('December');
        cy.get('#years').select('1989');
        cy.get('#newsletter').check();
        cy.get('#optin').check();

        //dirección
        cy.get('#company').type('Moons - Ortodoncia invisible');
        cy.get('#address1').type('10880 Malibu Point, 90265, Malibú, California');
        cy.get('#address2').type('Colima 220, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX');
        cy.get('#city').type('CDMX');
        cy.get('#postcode').clear().type('90265');
        cy.get('#id_country').select('United States');
        cy.get('#other').type('Frente al oxxo');
        cy.get('#phone').type('5529044570');
        cy.get('#phone_mobile').type('5589652344');
        cy.get('#alias').clear().type('Domicilio principal');
        cy.get('#id_state').select('New Mexico').should('have.value', '31')

        //Envío de información
        cy.get('#submitAccount > span').click();

        //Aserción de registro via url y cadena de texto
        cy.url().should('include', 'http://automationpractice.com/index.php?controller=my-account')
        cy.get('.info-account').should('include.text', 'Welcome to your account')
        cy.screenshot()
    })
})


