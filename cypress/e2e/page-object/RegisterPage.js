class RegisterPage{
    emailCreate(email){
        cy.get('#email_create').type(email)
    }
    submitCreate(){
        cy.get('#SubmitCreate').click()
    }
    selectGender(id_gender){
        cy.get(id_gender).click()
    }
    enterFirstName(){
        cy.get('#customer_firstname').type('Automation')

    }
    enterLastName(){
        cy.get('#customer_lastname').type('Tester')

        
    }
    enterPassword(){
        cy.get('passwd').type('1234567890',{sensitive:true})
    }
   enterAddressFirstname(){
    cy.get('#firstname').type('Automation')
   }
   enterAddressLastname(){
    cy.get('#lastname').type('Tester')
   }
    enterAddress(address){
        cy.get('#address1').type(address)
    }
   enterCity(){
    cy.get('#city').type()
   }
    
    selectState(state){
        cy.get('#id_state').select(state)
    }
    selectCountry(country){
        cy.get('#id_country').select(country)
    }
    enterMobile(phone_mobile){
        cy.get('#phone_mobile').type(phone_mobile)
    }
    submitAccount(){
    cy.get('#submitAccount').click();
    }

}
export default RegisterPage;