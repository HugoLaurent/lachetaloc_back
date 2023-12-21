const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const authRouter = require("./router/auth");
const routerUser = require("./router/user");
const routerFollow = require("./router/follow");
const routerAccomodation = require("./router/accomodation");
const routerNotification = require("./router/notification");
const authenticateToken = require("./hook/auth/authenticateToken");
const routerPublic = require("./router/public");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ou votre domaine spécifique au lieu de '*'
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(express.json());

app.use("/public", routerPublic);

app.use("/accomodations", authenticateToken, routerAccomodation);

app.use("/users", routerUser);

app.use("/follows", authenticateToken, routerFollow);

app.use("/auth", authRouter);

app.use("/notifications", authenticateToken, routerNotification);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
