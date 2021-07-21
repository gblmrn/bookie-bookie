// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'knexseed',
      user: 'root',
      password: 'Parola'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
