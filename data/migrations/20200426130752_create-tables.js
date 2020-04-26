exports.up = function (knex) {
  return knex.schema
    .createTable("user", (tbl) => {
      tbl.increments();
      tbl.string("username").notNullable().unique();
      tbl.string("password", 100).notNullable();
    })
    .createTable("post", (tbl) => {
      tbl.increments();
      tbl.string("img_url").notNullable();
      tbl.text("story");
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
