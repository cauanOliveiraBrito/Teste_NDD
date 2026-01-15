
import TarefasPage from './pages/TarefasPage'

describe('Exclusão de tarefa', () => {
  it('Deve excluir uma tarefa da lista', () => {
    TarefasPage.acessarPagina()
    TarefasPage.excluirPrimeiraTarefa()
    TarefasPage.validarExclusao()
  })
})
