const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const authRouter = require("./router/auth");
const routerUser = require("./router/user");
const routerFollow = require("./router/follow");
const routerAccomodation = require("./router/accomodation");
const authenticateToken = require("./hook/auth/authenticateToken");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.use("/accomodations", routerAccomodation);

app.use("/users", routerUser);

app.use("/follows", authenticateToken, routerFollow);

app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
