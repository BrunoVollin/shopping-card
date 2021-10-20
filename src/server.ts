import express, { Request, Response } from "express";
import message from "./routes";

const app = express();
const port = 3000;

app.use(message);
app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
