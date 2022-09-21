class CartPage{

    navigate(){
        cy.get('[href="http://automationpractice.com/index.php?id_category=3&controller=category"]').eq(1).click()

    }
    addToCart(){
       return cy.get('li.ajax_block_product:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > a:nth-child(1) > span:nth-child(1)')
    }
}
export default CartPage;