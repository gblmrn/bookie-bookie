var faker = require('faker');

let createRecord = (knex, id) => {
  return knex('books').insert({
    id,
    title: faker.random.words(),
    author: faker.name.firstName(),
    releaseDate: new Date(),
    created_at: new Date(),
    updated_at: new Date()
  })
}

exports.seed = (knex) => {
  return knex('books').del()
    .then(() => {
      let records = [];

      for (let i = 1; i < 10; i++) {
        records.push(createRecord(knex, i))
      }

      return Promise.all(records);
    });
};
