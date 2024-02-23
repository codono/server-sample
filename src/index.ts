import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import router from "./router";

const app: Express = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
  console.log(`
  =================================
   server is running on port: ${port}
  =================================
  `);
});
