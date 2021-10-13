import * as express from 'express';
import * as bodyParser from "body-parser";
import { WelcomeController } from './router';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/welcome', WelcomeController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});


// import { Client } from "./model/Client";
// import { Product } from "./model/Product";

// const bruno = new Client({ name: "Bruno", age: 21, password: "123" });

// const farcry6 = new Product({
//   name: "Farcry 6",
//   bland: "Ubisoft",
//   description: "New fps game",
//   price: 299.99,
// });

// bruno.addProduct(farcry6);

// console.log(bruno.getShoppingCard());
