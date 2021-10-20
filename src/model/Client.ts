import { Product } from "./Product";

export class Client {
  name: string;
  age: number;
  private _password: string;
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
    this._password = password;
  }
  
  public getShoppingCard(): Array<Product> {
    return this._shoppingCard;
  }
  
  public addProduct(product: Product) {
    this._shoppingCard.push(product);
  }

  public getPassword(): string {
    return this._password;
  }

  public setPassword(value: string) {
    this._password = value;
  }
  
}
