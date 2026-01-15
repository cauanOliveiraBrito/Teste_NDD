
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CarrinhoPage from '../pages/CarrinhoPage'

Given('que o usuário está na página do carrinho', () => {
  CarrinhoPage.acessarPagina()
})

When('ele remove um produto', () => {
  CarrinhoPage.removerProduto()
})

Then('o contador do carrinho deve ser atualizado', () => {
  CarrinhoPage.validarContador()
})
