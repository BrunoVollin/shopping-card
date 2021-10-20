import { Request, Response, Router } from "express";
import { Client } from "../model/Client";

const routes = Router();

export default routes.get("/msg", (req: Request, res: Response) => {
  const client = new Client({
    age: 20,
    name: "Enzo",
    password: "maneiroJovem33",
  });
  res.send(client);
});
