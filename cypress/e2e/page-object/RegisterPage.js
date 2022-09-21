class RegisterPage{
    emailCreate(email){
        return cy.get('#email_create').type(email)
    }
    submitCreate(){
        cy.get('#SubmitCreate').click()
    }
    selectGender(id_gender){
        return  cy.get(id_gender).click()
    }
    enterFirstName(){
        return  cy.get('#customer_firstname').type('Automation')

    }
    enterLastName(){
        return  cy.get('#customer_lastname').type('Tester')

        
    }
    enterPassword(){
        return  cy.get('passwd').type('1234567890',{sensitive:true})
    }
   enterAddressFirstname(){
    return  cy.get('#firstname').type('Automation')
   }
   enterAddressLastname(){
    return  cy.get('#lastname').type('Tester')
   }
    enterAddress(address){
        return   cy.get('#address1').type(address)
    }
   enterCity(){
    return  cy.get('#city').type()
   }
    
    selectState(state){
        return    cy.get('#id_state').select(state)
    }
    selectCountry(country){
        return   cy.get('#id_country').select(country)
    }
    enterMobile(phone_mobile){
        return    cy.get('#phone_mobile').type(phone_mobile)
    }
    submitAccount(){
    cy.get('#submitAccount').click();
    }

}
export default RegisterPage;