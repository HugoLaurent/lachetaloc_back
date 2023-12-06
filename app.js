const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const routerUser = require("./router/user");
const routerFollow = require("./router/follow");
const routerAccomodation = require("./router/accomodation");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.use("/accomodations", routerAccomodation);

app.use("/users", routerUser);

app.use("/follows", routerFollow);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
