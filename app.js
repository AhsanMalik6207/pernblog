const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./server/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

<<<<<<< HEAD
 app.listen(3000, "localhost", function () {
  console.log(`Port is listening at http://localhost:${3000}`);
=======
const server = app.listen(3000, "localhost", function () {
  console.log(`Blog App listening at http://localhost:${3000}`);
>>>>>>> master
});
