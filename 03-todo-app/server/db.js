const { Pool } = require("pg");

const pool = new Pool(
    {
        user: "someuser",
        password: "password",
        host: "localhost",
        port: 5432,
        database: "todo"
    }
);

module.exports = pool;
