import { Knex } from "knex";
import { Client } from "../../model/Client";

export async function seed(knex: Knex) {
  const obj: Array<Client> = [
    new Client({
      age: 18,
      name: "Enzo",
      password: "maneiroJovem33",
    }),
    new Client({
      age: 12,
      name: "Bruno",
      password: "batata123",
    }),
  ];

  const obj2 = obj.map((index) => ({
    name: index.name,
    age: index.age,
    password: index.getPassword(),
  }));

  await knex("client").insert(obj2);
}
