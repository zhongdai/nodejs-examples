# Express + Knex

## Quick Start

Install packages,

```bash
npm i express knex pg @vscode/sqlite3

npm i --save-dev nodemon dotenv
```

Start the development server,

```bash
npm run devStart
```

## Test

Install the `VS Code` extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client), and run the following test cases.

```
POST http://localhost:3001/person
Content-Type: application/json

{
    "firstName": "Zhong",
    "lastName": "Dai",
    "email": "123xyz@gmail.com"
}

###

GET http://localhost:3001/person


###

GET http://localhost:3001/person/2

```

## Reference

`knex` commands,

```bash
# generate the migration
npx knex migrate:make init --migrations-directory db/migrations

# execute the migrations to latest snapshot
npx knex migrate:latest
```

Official document for [knex](http://knexjs.org/#Installation)
