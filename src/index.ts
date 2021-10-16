import * as express from "express";
import { connectToDatabase } from "./services/database.service";
import { usersRouter } from "./router/user.router";

const app = express();
const port = 3003;

connectToDatabase()
  .then(() => {
    app.use("/games", usersRouter);

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
