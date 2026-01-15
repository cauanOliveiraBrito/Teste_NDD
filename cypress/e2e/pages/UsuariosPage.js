
class UsuariosPage {
  acessarPagina() {
    cy.visit('/usuarios')
  }

  filtrar(nome) {
    cy.get('#filtro-nome').type(`${nome}{enter}`)
  }

  validarResultado(nome) {
    cy.contains(nome).should('be.visible')
  }
}

export default new UsuariosPage()
