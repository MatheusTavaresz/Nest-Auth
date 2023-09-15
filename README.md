<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  # Autenticação Simples com NestJS

## Descrição

Este é um projeto de aplicação server-side construído com NestJS e TypeScript. E está configurado para usar JWT (JSON Web Tokens) para autenticação, o projeto possui funcionalidades de autenticação e autorização e usa MongoDB como banco de dados.

## Funcionalidades

- **NestJS**: Um framework Node.js progressivo para construir aplicações server-side eficientes e escaláveis.
- **TypeScript**: Superset de JavaScript que compila para código JavaScript limpo.
- **Mongoose**: Modelagem elegante de objetos MongoDB para Node.js.
- **Autenticação JWT**: Utiliza `@nestjs/jwt` e `@nestjs/passport` para manipulação da autenticação baseada em JWT.
- **Validação de Dados**: Usa `class-validator` e `class-transformer` para validação e transformação de dados.
- **Hash de Senha**: Utiliza `bcrypt` para segurança de senhas.

## Instalação

Primeiro, certifique-se de que você tem Node.js e npm instalados. Depois, execute:

\`\`\`bash
npm install
\`\`\`

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run build`: Constrói a aplicação.
- `npm run format`: Formata o código usando Prettier.
- `npm start`: Inicia a aplicação.
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento com hot-reloading.
- `npm run start:debug`: Inicia a aplicação em modo de debug.
- `npm run start:prod`: Inicia a aplicação em modo de produção.
- `npm run lint`: Verifica o código-fonte, tentando corrigir problemas triviais automaticamente.
- `npm test`: Executa a suíte de testes Jest.
- `npm run test:watch`: Executa a suíte de testes Jest em modo watch.
- `npm run test:cov`: Executa a suíte de testes Jest e gera um relatório de cobertura.
- `npm run test:debug`: Executa a suíte de testes Jest em modo de debug.
- `npm run test:e2e`: Executa testes de ponta a ponta.

## Dependências

Aqui estão algumas das principais dependências usadas neste projeto:

- `@nestjs/common`, `@nestjs/core`: Módulos principais do NestJS
- `@nestjs/mongoose`: Para banco de dados MongoDB
- `@nestjs/jwt`, `@nestjs/passport`: Para autenticação
- `bcrypt`: Para hash de senha
- `class-transformer`, `class-validator`: Para validação e transformação de dados
- `dotenv`: Para gerenciar variáveis de ambiente
- `jsonwebtoken`: Para manipulação de JSON Web Tokens
- `passport`, `passport-jwt`: Para manipulação da autenticação

## Dependências de Desenvolvimento

- `@nestjs/cli`, `@nestjs/schematics`: CLI e esquemáticos do NestJS
- `@nestjs/testing`: Para testes no NestJS
- `jest`, `ts-jest`, `supertest`: Para execução de testes
- `prettier`, `eslint`: Para formatação de código e linting

## Autor

Matheus Patrick - [LinkedIn](https://www.linkedin.com/in/matheus-patrickz/)
