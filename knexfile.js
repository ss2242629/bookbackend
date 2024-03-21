module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'postgreslib.postgres.database.azure.com',
      user: 'postadmin@postgreslib.postgres.database.azure.com',
      password: '@@Reset123',
      database: 'postgres',
      port: 5432
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      host: 'postgreslib.postgres.database.azure.com',
      user: 'postadmin@postgreslib.postgres.database.azure.com',
      password: '@@Reset123',
      database: 'postgres',
      port: 5432
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
