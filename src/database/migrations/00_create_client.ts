import knex, { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("client", (table) => {
    table.increments("id").primary;
    table.string("name").notNullable;
    table.string("password").notNullable;
    table.decimal("age").notNullable;
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("client");
}
