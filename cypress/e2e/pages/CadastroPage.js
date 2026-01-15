
class CadastroPage {
  acessarPagina() {
    cy.visit('/cadastro')
  }

  preencherFormulario(nome, email, senha) {
    cy.get('#nome').type(nome)
    cy.get('#email').type(email)
    cy.get('#senha').type(senha)
  }

  cadastrar() {
    cy.contains('Cadastrar').click()
  }

  validarCadastro() {
    cy.contains('Cadastro realizado com sucesso.').should('be.visible')
  }
}

export default new CadastroPage()
