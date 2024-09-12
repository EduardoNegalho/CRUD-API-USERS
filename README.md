# DOCUMENTAÇÃO

## Visão Geral
Este repositório contém uma aplicação de servidor Node.js usando Express e Prisma ORM para gerenciar dados de usuários. Ele fornece endpoints para criar, ler, atualizar e excluir usuários.

## Instalação
1. Clone o repositório:
    ```sh
    git clone <url-do-repositorio>
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd <diretorio-do-projeto>
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
4. Configure o banco de dados Prisma:
    ```sh
    npx prisma migrate dev --name init
    ```

## Uso
1. Inicie o servidor:
    ```sh
    npm start
    ```
2. O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

### GET /users
- **Descrição**: Recupera uma lista de usuários.
- **Resposta**: 
    - Status: `200 OK`
    - Corpo: Array de objetos de usuário.

### POST /users
- **Descrição**: Cria um novo usuário.
- **Requisição**:
    - Corpo: 
        ```json
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "age": 30,
            "password": "securepassword"
        }
        ```
- **Resposta**:
    - Status: `201 Created`
    - Corpo: O objeto do usuário criado.

### PUT /users/:id
- **Descrição**: Atualiza um usuário existente.
- **Requisição**:
    - Parâmetros: `id` (ID do usuário)
    - Corpo: 
        ```json
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "age": 31,
            "password": "newsecurepassword"
        }
        ```
- **Resposta**:
    - Status: `200 OK`
    - Corpo: O objeto do usuário atualizado.

### DELETE /users/:id
- **Descrição**: Exclui um usuário.
- **Requisição**:
    - Parâmetros: `id` (ID do usuário)
- **Resposta**:
    - Status: `200 OK`

## Licença
Este projeto está licenciado sob a Licença MIT.