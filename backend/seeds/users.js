var faker = require('faker');

let createRecord = (knex, id) => {
  return knex('users').insert({
    id,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.exampleEmail(),
    created_at: new Date(),
    updated_at: new Date()
  })
}

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      let records = [];

      for (let i = 1; i < 10; i++) {
        records.push(createRecord(knex, i))
      }

      return Promise.all(records);
    });
};

