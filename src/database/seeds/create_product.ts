import { Knex } from "knex";
import { Product } from "../../model/Product";

export async function seed(knex: Knex) {
  const obj: Array<Product> = [
    new Product({
      name: "Farcry 6",
      bland: "Ubsoft",
      description: "a new farcry game",
      price: 60.99,
    }),
    new Product({
      name: "Call of Duty Vanguard",
      bland: "Activision",
      description: "a new Call of Duty game",
      price: 70.0,
    }),
  ];

  const obj2 = obj.map((index) => ({
    name: index.name,
    bland: index.bland,
    description: index.description,
    price: index.getPrice(),
  }));

  await knex("product").insert(obj2)
}
