exports.up = function (knex) {
  return knex.schema
    .createTable("user", (tbl) => {
      tbl.increments();
      tbl.string("username").notNullable().unique();
      tbl.string("password", 100).notNullable();
      tbl.text("bio");
    })
    .createTable("post", (tbl) => {
      tbl.increments();
      tbl.string("title", 50).notNullable();
      tbl.string("img_url").notNullable();
      tbl.string("location");
      tbl.text("story");
      tbl.timestamp("created at").defaultTo(knex.fn.now());
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("post").dropTableIfExists("user");
};
