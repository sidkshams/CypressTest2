import LoginPage from "./page-object/loginPage";

describe('register', () => {
    beforeEach(function () {
        cy.viewport(1280, 720)
        cy.fixture('LoginPage').then(function (testdata) {
            this.testdata = testdata
        })
        const loginPage= new LoginPage();
        loginPage.visitLoginPage();
    })
    it('register', () => {
        // // Arrange
        // const loginPage= new LoginPage();
        // loginPage.visitLoginPage();
        cy.get('#email_create').type('abc45s@gmail.com'),
        cy.get('#SubmitCreate').click()
        cy.get('#uniform-id_gender1').click()
        cy.get('#customer_firstname').type('Automation')
        cy.get('#customer_lastname').type('Tester')
        cy.get('passwd').type('',{sensitive:true})
        cy.get('#firstname').type('Automation')
        cy.get('#lastname').type('Tester')
        cy.get('#address1')
        cy.get('#city')
        cy.get('#id_state').select('1')
        cy.get('#id_country').select('1')
        cy.get('#phone_mobile').type()
        cy.get('#submitAccount').click();



        // Act
    
        // Assert
    
    });
    it('validate empty create Account', () => {
        // Arrange
        // const loginPage= new LoginPage();
        // loginPage.visitLoginPage();
        // cy.get('#email_create').type('abc45s@gmail.com'),
        cy.get('#SubmitCreate').click();
        

        // Act
    
        // Assert
    
    });
    it('validate empty register Account', () => {
        // Arrange
        // const loginPage= new LoginPage();
        // loginPage.visitLoginPage();
        cy.get('#email_create').type('abc454s@gmail.com'),
        cy.get('#SubmitCreate').click().wait(2040);
        cy.get('#submitAccount').click();

        // Act
    
        // Assert
    
    });
});
