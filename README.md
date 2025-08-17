# API RESTful de Cadastro com Node.js e MongoDB

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## Descrição

Este projeto é uma API RESTful completa para realizar operações de CRUD (Create, Read, Update, Delete) para um recurso de "Pessoas". Foi desenvolvido como parte dos meus estudos em desenvolvimento backend, aplicando conceitos essenciais do ecossistema Node.js para a construção de serviços escaláveis e robustos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para o JavaScript no servidor.
- **Express.js**: Framework para a construção da API, gerenciamento de rotas e middlewares.
- **MongoDB**: Banco de dados NoSQL orientado a documentos, utilizado para a persistência dos dados.
- **Mongoose**: Biblioteca para modelagem dos dados (ODM) e conexão com o MongoDB.
- **Dotenv**: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* Você também precisará de uma string de conexão do [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou uma instância local do MongoDB.

## Instalação e Execução

Siga os passos abaixo para executar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/danielacvmelo/crud-api-restful-nodejs-mongodb.git](https://github.com/danielacvmelo/crud-api-restful-nodejs-mongodb.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd crud-api-restful-nodejs-mongodb
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    Existe um arquivo chamado `.env.example` neste projeto. Ele é um modelo de quais variáveis você precisa. Crie uma cópia dele e renomeie para `.env`:

    ```bash
    cp .env.example .env
    ```
    Agora, abra o arquivo `.env` que você acabou de criar e preencha com suas credenciais do MongoDB.

    **Arquivo `.env`**
    ```
    # Credenciais do MongoDB
    DB_USER=SEU_USUARIO_DO_BANCO
    DB_PASSWORD=SUA_SENHA_DO_BANCO
    ```

5.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará rodando na porta `3000`. Você pode acessá-lo em `http://localhost:3000`.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danielacvmelo/)
