
class TarefasPage {
  acessarPagina() {
    cy.visit('/tarefas')
  }

  excluirPrimeiraTarefa() {
    cy.contains('Excluir').first().click()
  }

  validarExclusao() {
    cy.contains('Tarefa excluída').should('be.visible')
  }
}

export default new TarefasPage()
