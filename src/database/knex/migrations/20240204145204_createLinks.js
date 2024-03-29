exports.up = knex => knex.schema.createTable("links", table =>{
  table.increments("id")
  table.text("url").notNullable()
  table.integer("movie_id").references("id").inTable("movies").onDelete("CASCADE")
  table.timestamp("created_at").default(knex.fn.now())

})
  
exports.down = knex => knex.schema.dropTable("links")
