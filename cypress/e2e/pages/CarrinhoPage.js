
class CarrinhoPage {
  acessarPagina() {
    cy.visit('/carrinho')
  }

  removerProduto() {
    cy.contains('Remover').first().click()
  }

  validarContador() {
    cy.get('#contador-carrinho').should('be.visible')
  }
}

export default new CarrinhoPage()
