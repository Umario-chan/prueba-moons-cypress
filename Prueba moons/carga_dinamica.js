describe('Registro de usuario', function(){
    it('registro', function(){

        //carga de variables dinamicas con json
        cy.fixture('user').then((user)  => {
            var name = user.name
            var lastname = user.lastname
            var email = user.email
            var password = user.password
            var day = user.day
            var month = user.month
            var year = user.year
            var company = user.company
            var address = user.address
            var address2 = user.address2
            var city = user.city
            var state = user.state
            var postcode = user.postcode
            var country = user.country
            var information = user.information
            var homephone = user.homephone
            var mobiphone = user.mobiphone
            var alias = user.alias

            //1. ingreso al sitio
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click();
        cy.get('#email_create').type(email);
        cy.get('#SubmitCreate > span').click();

            //2. llenado de form
            //información personal
            cy.get('#id_gender1').click();
            cy.get('#customer_firstname').type(name);
            cy.get('#customer_lastname').type(lastname);
            cy.get('#passwd').type(password);
            cy.get('#days').select(day);
            cy.get('#months').select(month);
            cy.get('#years').select(year);
            cy.get('#newsletter').check();
            cy.get('#optin').check();

            //dirección
            cy.get('#company').type(company);
            cy.get('#address1').type(address);
            cy.get('#address2').type(address2);
            cy.get('#city').type(city);
            cy.get('#postcode').clear().type(postcode);
            cy.get('#id_country').select(country);
            cy.get('#other').type(information);
            cy.get('#phone').type(homephone);
            cy.get('#phone_mobile').type(mobiphone);
            cy.get('#alias').clear().type(alias);
            cy.get('#id_state').select(state);

            //Envío de información
            cy.get('#submitAccount > span').click();

            //Aserción de registro via url y cadena de texto
            cy.url().should('include', 'http://automationpractice.com/index.php?controller=my-account')
            cy.get('.info-account').should('include.text', 'Welcome to your account')
            cy.screenshot()
        })

    })
})