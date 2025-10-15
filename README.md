# Relatório de Testes Automatizados

### Objetivo do teste

Teste E2E para validação de login, utilizando o **Cypress**.

### Decisão da Ferramenta:

Optamos por usar Cypress por sua facilidade de uso, excelente documentação e a capacidade de rodar testes de ponta a ponta de forma estável. Além disso, ele se integra bem com o ecossistema JavaScript, o que facilita o desenvolvimento e a manutenção.

### Cenários de Testes

1. **Login com sucesso**: Acessar a página de login, preencher com credenciais válidas e verificar se o usuário é redirecionado para a página inicial com o nome de usuário exibido.
   - **Status**: Pass ✅

2. **Login com falha (senha incorreta):**: Acessar a página de login, preencher com senha incorreta e verificar se a mensagem de erro é exibida.
   - **Status**: Pass ✅

3. **Login com falha (campos vazios):**: Clicar em "login" sem preencher os campos e verificar se o alerta de erro é exibido.
   - **Status**: Pass ✅

### Critérios de Sucesso:
1. Todos os cenários de teste devem passar. ✅
2. A execução dos testes deve ser integrada ao pipeline de CI/CD. ✅
3. Recursos Necessários: Node.js, Cypress, VS Code. ✅

##
Aplicação Web Testada: https://www.demoblaze.com/<br>
