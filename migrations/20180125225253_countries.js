
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('code', 2)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('countries')
}
