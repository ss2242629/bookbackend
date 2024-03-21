const { Pool } = require("pg");

const pool = new Pool({
    user: "postadmin",
    password: "@@Reset123",
    host: "postgreslib.postgres.database.azure.com",
    port: 5432,
    database: "postgres",
    ssl: false,	
})

module.exports = pool;
