
import CadastroPage from './pages/CadastroPage'

describe('Cadastro de novo usuário', () => {
  it('Deve cadastrar usuário com sucesso', () => {
    CadastroPage.acessarPagina()
    CadastroPage.preencherFormulario('Usuário Teste', 'usuario@teste.com', 'senha123')
    CadastroPage.cadastrar()
    CadastroPage.validarCadastro()
  })
})
