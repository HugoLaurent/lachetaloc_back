const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const authRouter = require("./router/auth");
const routerUser = require("./router/user");
const routerFollow = require("./router/follow");
const routerAccomodation = require("./router/accomodation");
const routerNotification = require("./router/notification");
const authenticateToken = require("./hook/auth/authenticateToken");
const publicController = require("./controller/publicController");

const app = express();
app.use(express.json());

app.use("/", publicController.getAllAccomodation);

app.use("/accomodations", authenticateToken, routerAccomodation);

app.use("/users", routerUser);

app.use("/follows", authenticateToken, routerFollow);

app.use("/auth", authRouter);

app.use("/notifications", authenticateToken, routerNotification);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
