const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const authRouter = require("./router/auth");
const routerUser = require("./router/user");
const routerFollow = require("./router/follow");
const routerAccommodation = require("./router/accommodation");
const routerNotification = require("./router/notification");
const authenticateToken = require("./hook/auth/authenticateToken");
const routerAdmin = require("./router/admin");
const contactRouter = require("./router/contact");

const cors = require("cors");
const isAdmin = require("./hook/auth/isAdmin");

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: ["https://lachetaloc.vercel.app", "http://127.0.0.1:5173"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/admin", authenticateToken, routerAdmin);
app.use("/api/auth", authRouter);
app.use("/api/user", routerUser);
app.use("/api/follow", authenticateToken, routerFollow);
app.use("/api/accommodation", routerAccommodation);
app.use("/api/notification", authenticateToken, routerNotification);
app.use("/api/contact", authenticateToken, contactRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
