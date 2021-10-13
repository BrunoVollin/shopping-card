export class Product {
  name: string;
  description: string;
  bland: string;
  private _price: number;

  constructor({
    name,
    bland,
    description,
    price
  }: {
    name: string;
    description: string;
    bland: string;
    price: number;
  }) {
    this.name = name;
    this.description = description;
    this.bland = bland;
    this._price = price;
  }

  public getPrice(): number {
    return this._price;
  }
  public setPrice(value: number) {
    this._price = value;
  }
}
