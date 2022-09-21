import LoginPage from './page-object/loginPage';
import './utils/login';
const loginPage= new LoginPage();
var user;

describe('empty spec', () => {
  beforeEach(function () {
    cy.viewport(1280, 720)
    cy.fixture('LoginPage').then(function (testdata) {
        this.testdata = testdata
    })
    loginPage.visitLoginPage();
})

  it('passes', () => {
    // const loginPage= new LoginPage();
    // loginPage.visitLoginPage().wait(2040),
    // user=this.testdata;
    email=this.testdata.email
    cy.wait(2040)
    loginPage.typeEmail('abc@gmail.com');
    cy.wait(2040)
    loginPage.getPassword(email);
    cy.wait(2040)
    loginPage.PressButton();
    cy.wait(2040)
    cy.get('.logout').should('be.visible');
    cy.log('login passes successfully.....')

    // loginPage.getEmail().type('email@gmail.com',{sensitive: true});
  })
})