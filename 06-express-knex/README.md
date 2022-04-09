# Express + Knex

Install packages,

```bash
npm i express knex pg @vscode/sqlite3

npm i --save-dev nodemon dotenv
```

Commands for `knex`,

```bash
# generate the migration
npx knex migrate:make init --migrations-directory db/migrations

# execute the migrations to latest snapshot
npx knex migrate:latest
```
