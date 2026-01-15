# Teste_NDD
Teste tecnico simples

📖 Sobre o projeto

Este projeto foi criado com o objetivo exclusivamente avaliativo, simulando um ambiente de automação de testes end-to-end (E2E) utilizando BDD (Behavior Driven Development).

O foco está em demonstrar:

Organização de testes
Escrita de cenários em Gherkin
Uso de Page Object Model
Integração entre Cypress e Cucumber
Estrutura preparada para futura escalabilidade

🧪 Tecnologias utilizadas

Node.js
Cypress 
Cucumber (Gherkin) – Escrita de cenários em linguagem natural 
@badeball/cypress-cucumber-preprocessor – Integração Cypress + Cucumber

📦 Dependências do projeto
"devDependencies": {
  "cypress": "^15.9.0",
  "@badeball/cypress-cucumber-preprocessor": "^24.0.0"
}

Por que essas dependências?

Cypress Cucumber Preprocessor (@badeball)
Responsável por permitir a escrita de testes no formato BDD, conectando arquivos .feature (Gherkin) com a automação em Cypress.

🧠 Metodologia aplicada – BDD (Behavior Driven Development)

O projeto segue os princípios de BDD, onde:

Os testes são escritos do ponto de vista do comportamento do usuário
Os cenários utilizam linguagem natural (Gherkin), facilitando o entendimento por pessoas técnicas e não técnicas
A automação valida se o sistema atende aos comportamentos descritos

🧱 Page Object Model (POM)

Foi aplicado o Page Object Model para organizar melhor o código de automação.

Por que foi utilizado?

Facilita manutenção dos testes
Evita duplicação de código
Melhora legibilidade
Permite crescimento do projeto sem gerar acoplamento
Torna o projeto mais profissional e escalável

▶️ Como rodar o projeto
1️⃣ Instalar as dependências
npm install

2️⃣ Abrir o Cypress
npx cypress open

Ou para rodar em modo headless:
npx cypress run

📂 Organização dos testes

features/
Contém os cenários escritos em Gherkin

step_definitions/
Implementação dos passos do Gherkin usando Cypress

pages/
Page Objects responsáveis por encapsular ações e seletores


📝 Observações finais

Este projeto tem como objetivo demonstrar:

Conhecimento técnico em automação de testes
Aplicação de boas práticas
Organização de código
Uso correto de BDD e Page Object Model
