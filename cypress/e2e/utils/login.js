
import LoginPage from "../page-object/loginPage";

const user= new LoginPage();
Cypress.Commands.add('login',()=>{
    // 

    // user.LoginPage.visitLoginPage().wait(2040);
    user.visitLoginPage().wait(2040);
    user.getEmail().wait(2040);
    user.getPassword().wait(2040);
    user.PressButton().wait(2040);



  })