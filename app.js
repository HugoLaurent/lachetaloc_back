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

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: ["https://lachetaloc.vercel.app", "http://127.0.0.1:5173"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/public", routerPublic);
app.use("/api/auth", authRouter);
app.use("/api/users", routerUser);
app.use("/api/follows", authenticateToken, routerFollow);
app.use("/api/accomodations", authenticateToken, routerAccomodation);
app.use("/api/notifications", authenticateToken, routerNotification);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
