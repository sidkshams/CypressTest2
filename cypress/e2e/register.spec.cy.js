import LoginPage from "./page-object/loginPage";
import RegisterPage from "./page-object/RegisterPage";
// const { fake } = require('faker'); 
// const faker = require("faker");
// const email=faker.internet.email();
// const phone=faker.phone.phoneNumber();
// const address=faker.address()
describe('register', () => {
    beforeEach(function () {
        cy.viewport(1280, 720)
        cy.fixture('LoginPage').then(function (testdata) {
            this.testdata = testdata
        })
        const loginPage= new LoginPage();
        loginPage.visitLoginPage();
        const register = new RegisterPage()
    })
    it('register passes', () => {
        // // Arrange
        // const loginPage= new LoginPage();
        // loginPage.visitLoginPage();
        register.emailCreate("email@gmail.com"),
        register.submitCreate(),
        register.selectGender('#uniform-id_gender1'),
        register.enterFirstName(),
        register.enterLastName(),
        register.enterPassword(),
        register.enterAddressFirstname(),
        register.enterAddressLastname(),
        register.enterAddress("address")
       register.enterCity(),
       register.selectState('1')
        register.selectCountry('1')
        register.enterMobile('152 458 4561')
        register.submitAccount();

cy.log('successful registration');
        // Act
    
        // Assert
    
    });
    it('validate empty create Account', () => {
        // Arrange
        // const loginPage= new LoginPage();
        // loginPage.visitLoginPage();
        // cy.get('#email_create').type('abc45s@gmail.com'),
        register.submitCreate(),
        cy.get('#create_account_error').contains('Invalid email address.');
        cy.log("validate empty create account")

        // Act
    
        // Assert
    
    });
    it('validate empty register Account', () => {
        // Arrange
        // const loginPage= new LoginPage();
        // loginPage.visitLoginPage();
        register.emailCreate('abc454854s@gmail.com'),
        register.submitCreate(),
        cy.wait(2040);
        register.submitAccount();
        cy.get('html body#authentication.authentication.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div.alert.alert-danger').contains('You must register at least one phone number.');
        cy.get('html body#authentication.authentication.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div.alert.alert-danger').contains('lastname');
        cy.get('html body#authentication.authentication.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div.alert.alert-danger').contains('email');
        cy.get('html body#authentication.authentication.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div.alert.alert-danger').contains('password');
        cy.get('html body#authentication.authentication.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div.alert.alert-danger').contains('country');
        cy.get('html body#authentication.authentication.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div.alert.alert-danger').contains('state');
        cy.get('html body#authentication.authentication.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div.alert.alert-danger').contains('Zip/Postal code');
        cy.get('html body#authentication.authentication.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div.alert.alert-danger').contains('address');

        cy.log('validate empty register form');


        // Act
    
        // Assert
    
    });
});
