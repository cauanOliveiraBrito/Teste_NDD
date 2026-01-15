
class RecuperacaoSenhaPage {
  acessarPagina() {
    cy.visit('/recuperar-senha')
  }

  preencherEmail(email) {
    cy.get('#email-recuperacao').type(email)
  }

  recuperar() {
    cy.contains('Recuperar').click()
  }

  validarMensagem() {
    cy.contains('Um link de recuperação foi enviado para seu e-mail.').should('be.visible')
  }
}

export default new RecuperacaoSenhaPage()
