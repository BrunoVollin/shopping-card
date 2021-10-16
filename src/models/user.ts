import { ObjectId } from "mongodb";

export default class User {
  constructor(
    public name: string,
    public price: number,
    public category: string,
    public id?: ObjectId
  ) {}
}
