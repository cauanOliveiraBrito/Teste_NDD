
import RecuperacaoSenhaPage from './pages/RecuperacaoSenhaPage'

describe('Recuperação de senha', () => {
  it('Deve recuperar senha com e-mail válido', () => {
    RecuperacaoSenhaPage.acessarPagina()
    RecuperacaoSenhaPage.preencherEmail('usuario@teste.com')
    RecuperacaoSenhaPage.recuperar()
    RecuperacaoSenhaPage.validarMensagem()
  })
})
