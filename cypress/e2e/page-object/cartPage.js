class CartPage{

    navigate(){
        cy.get('[href="http://automationpractice.com/index.php?id_category=3&controller=category"]').eq(1).click()

    }
    addToCart(){
       return cy.get('li.ajax_block_product:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > a:nth-child(1) > span:nth-child(1)').click({force: true})
    }
    continueShop(){
       return cy.get('.continue').click().wait(2040)
    }
    btnAdd(){
        return cy.get('.shopping_cart > a:nth-child(1)').click()
    }
    editQuantity(){
        return cy.get('#cart_quantity_up_2_7_0_739446').click()
    }
    deleteProduct(){
        return cy.get('html body#order.order.hide-left-column.hide-right-column.lang_en div#page div.columns-container div#columns.container div.row div#center_column.center_column.col-xs-12.col-sm-12 div#order-detail-content.table_block.table-responsive table#cart_summary.table.table-bordered.stock-management-on tbody tr#product_2_7_0_739446.cart_item.last_item.first_item.address_739446.odd td.cart_delete.text-center div a#2_7_0_739446.cart_quantity_delete').click()
    }
}
export default CartPage;