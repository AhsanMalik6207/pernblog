const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const routes = require("./server/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

const server = app.listen(3000, "localhost", function () {
  console.log(`Example app listening at http://localhost:${3000}`);
});