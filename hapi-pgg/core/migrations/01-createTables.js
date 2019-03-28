exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'),
    knex.schema.createTable('todolist', function (table) {
      table.uuid('activitynum').primary().defaultTo(knex.raw('uuid_generate_v4()'))
      table.string('activity').notNullable()
      console.log("table created")
    })
    ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    
  ])
}
