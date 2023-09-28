# Readme.md - Aplicação de Geração de Banco de Dados de Criminosos

Esta é uma aplicação que utiliza o Prisma com SQLite para gerar um banco de dados de criminosos e se integra com as APIs do FBI e da Interpol para obter informações sobre criminosos, normalizá-las e inseri-las no banco de dados. A aplicação também possui uma rota `/criminals` que traz todos os criminosos registrados no banco de dados.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na sua máquina.

## Instalação

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Execute as migrações do banco de dados para criar as tabelas:

   ```bash
   npx prisma migrate dev
   ```

3. Para checar a integridade do seu banco de dados use prisma studio para vizualizar as tabelas:

   ```bash
   npx prisma studio
   ```

4. Inicie o servidor:

   ```bash
   npm run start
   ```

Agora, a aplicação está pronta para ser usada.

## Uso

A aplicação possui os seguintes recursos:

### 1. Geração de Banco de Dados

A aplicação utiliza o Prisma com SQLite para criar o banco de dados e as tabelas necessárias. Certifique-se de executar as migrações conforme descrito na seção de instalação.

### 2. Coleta de Dados de Criminosos

A aplicação se integra com as APIs do FBI e da Interpol para obter informações sobre criminosos. Um script interno realiza essa coleta, normaliza os dados e os insere no banco de dados.

Para coletar dados de criminosos, você pode executar o seguinte comando:

```bash
npm run collect-criminals
```

Isso iniciará o processo de coleta e inserção de dados no banco de dados.

### 3. Rota de Consulta de Criminosos

A aplicação possui uma rota `/criminals` que permite consultar todos os criminosos registrados no banco de dados. Você pode acessá-la em seu navegador ou usando uma ferramenta de API, como o [Postman](https://www.postman.com/).

Exemplo de uso da rota no navegador:

```
http://localhost:3000/criminals
```

## Autores

- José Henrique Carvalho dos Santos
- Leonardo Nunes de Almeida
- Marco Antonio Gonçalves
- Rodrigo Pereira Martins
- Vinícius Simões Boschi

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Projeto criado para fins acadêmicos para a instituição FIAP em conjunto com a empresa IdWall
