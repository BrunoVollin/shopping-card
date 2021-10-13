import { Product } from "./Product";

export class Client {
  name: string;
  private age: number;
  private password: string;
  private _shoppingCard: Array<Product> = [];

  constructor({
    name,
    age,
    password,
  }: {
    name: string;
    age: number;
    password: string;
  }) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  public getShoppingCard(): Array<Product> {
    return this._shoppingCard;
  }

  public addProduct(product: Product) {
    this._shoppingCard.push(product);
  }
}
