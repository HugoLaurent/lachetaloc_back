const express = require("express");

const routerAccomodation = require("./router/accomodation");
const routerUser = require("./router/user");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.use("/accomodations", routerAccomodation);

app.use("/users", routerUser);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
