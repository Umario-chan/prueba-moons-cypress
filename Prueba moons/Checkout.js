describe('Checkout de carrito de compras', function(){
    it('checkout', function(){
        //1. Ingreso al sitio
        cy.visit('http://automationpractice.com/index.php')
        cy.screenshot()

        //2. Búsqueda de artículo y agregarlo a carrito
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .lnk_view > span').click();
        cy.get('.icon-plus').click();
        cy.get('#group_1').select('M');
        cy.get('#color_14').click();
        cy.get('#add_to_cart > .exclusive').click();
        cy.get('.icon-chevron-left').click();
        cy.screenshot()

        //3. Búsqueda de segundo artículo, vestido de noche, agregar a carrito
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
        cy.get(':nth-child(2) > .subcategory-image > .img > .replace-2x').click();
        cy.get('.ajax_add_to_cart_button > span').click();
        cy.get('.icon-chevron-left').click();
        cy.screenshot()

        //4. Ver carrito
        cy.get('[title="View my shopping cart"]').click();
        cy.get('.cart_navigation > .button > span').click();
        cy.screenshot()

        //5. Logeo de usuario
        cy.get('#email').type('mario.delarosa@live.com.mx');
        cy.get('#passwd').type('contraseñ@89');
        cy.get('#SubmitLogin > span').click();
        cy.screenshot()

        //6. Confirmación de domicilio
        cy.get('#ordermsg > .form-control').type('Entregar al portero del edificio');
        cy.get('.cart_navigation > .button > span').click();
        cy.screenshot()

        //7. Confirmación de envío 
        cy.get('#cgv').click();
        cy.get('.cart_navigation > .button > span').click();
        cy.screenshot()

        //8. Confirmación de pago
        cy.get('.cheque > span').click();
        cy.screenshot()

        //9. Confirmación de orden
        cy.get('#cart_navigation > .button > span').click();
        cy.get('.alert').should('include.text', 'Your order on My Store is complete.')
        cy.screenshot()
    })
})
