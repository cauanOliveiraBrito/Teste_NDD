
import UsuariosPage from './pages/UsuariosPage'

describe('Filtro de usuários', () => {
  it('Deve filtrar usuários pelo nome', () => {
    UsuariosPage.acessarPagina()
    UsuariosPage.filtrar('João')
    UsuariosPage.validarResultado('João')
  })
})
