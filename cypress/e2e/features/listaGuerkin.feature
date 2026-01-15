#Questão 1
Funcionalidade: Recuperação de senha

  Cenário: Recuperar senha com e-mail válido
    Dado que o usuário acessa a tela de login
    E clica no link "Esqueci minha senha"
    Quando é redirecionado para a página de recuperação de senha
    E informa um e-mail válido
    E clica no botão "Recuperar"
    Então o sistema deve exibir a mensagem "Um link de recuperação foi enviado para seu e-mail."

#Questão 2
Funcionalidade: Cadastro de novo usuário

  Cenário: Cadastro realizado com sucesso
    Dado que o usuário acessa a tela de cadastro
    Quando preenche o campo Nome com um valor válido
    E preenche o campo Email com um valor válido
    E preenche o campo Senha com um valor válido
    E clica no botão "Cadastrar"
    Então o sistema deve exibir a mensagem "Cadastro realizado com sucesso."

#Questão 3
Funcionalidade: Exclusão de tarefa

  Cenário: Excluir tarefa da lista
    Dado que o usuário acessa a lista de tarefas
    Quando clica no botão "Excluir" de uma tarefa
    E confirma a exclusão
    Então a tarefa deve ser removida da lista
    E o sistema deve exibir a mensagem "Tarefa excluída"

#Questão 4
Funcionalidade: Filtro de usuários

  Cenário: Filtrar usuários pelo nome
    Dado que o usuário acessa a tela de usuários
    Quando digita um nome na barra de busca
    E pressiona a tecla "Enter"
    Então o sistema deve exibir apenas os usuários cujo nome contenha o texto informado


