class LoginPage{

    visitLoginPage(){
        cy.visit('/');
        cy.get('.login').dblclick();

    }
    typeEmail(email){
        cy.get('#email').clear().type(email);
        return this;
    }
     getEmail(){
        cy.get('#email').clear().type("abc@gmail.com");
        return this;
    }
    getPassword(pass){
        return cy.get('#passwd').clear().type(pass,{sensitive: true});
        // return this;
    }
    PressButton(){
        cy.get('#SubmitLogin').click()
    };
}
export default LoginPage;