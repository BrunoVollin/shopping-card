import { Request, Response, Router } from "express";
import { Client } from "../model/Client";

const routes = Router();

export default routes.get("/msg", (req: Request, res: Response) => {
  res.send({ msg: "Good day" });
});
