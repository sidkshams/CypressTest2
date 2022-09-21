import CartPage from "./page-object/cartPage";
import LoginPage from "./page-object/loginPage";
describe('order Product', () => {
    beforeEach(function () {
        cy.viewport(1280, 720)
        cy.fixture('LoginPage').then(function (testdata) {
            this.testdata = testdata
        })
        const loginPage= new LoginPage();
        const order= new CartPage();
        loginPage.visitLoginPage()
        cy.wait(2040)
        loginPage.typeEmail('abc@gmail.com');
        cy.wait(2040)
        loginPage.getPassword('123456');
        cy.wait(2040)
        loginPage.PressButton();
        cy.wait(2040)
        
    })

    it('Add to cart', () => {
        const order= new CartPage();
        cy.wait(2040);
        order.navigate();
cy.wait(2040);
        order.addToCart();
        order.continueShop();
        order.btnAdd();
        cy.log("Add to cart success")

        // Arrange
        
    
        // Act
    
        // Assert
    
    
})

it('Edit cart', () => {
    const order= new CartPage();
    cy.wait(2040);
    order.navigate();
cy.wait(2040);
    order.addToCart();
    order.continueShop();
    order.btnAdd();
    order.editQuantity();

    cy.log("Edit cart success")

    // Arrange
    

    // Act

    // Assert


})
it('Delete from cart', () => {
    const order= new CartPage();
    cy.wait(2040);
    order.navigate();
cy.wait(2040);
    order.addToCart();
    order.continueShop();
    order.btnAdd();
    order.deleteProduct()
    
    
    cy.log("Delete from cart success")

    // Arrange
    

    // Act

    // Assert


})
});