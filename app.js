const express = require("express");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/pictures");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const authRouter = require("./router/auth");
const routerUser = require("./router/user");
const routerFollow = require("./router/follow");
const routerAccomodation = require("./router/accomodation");
const routerNotification = require("./router/notification");
const authenticateToken = require("./hook/auth/authenticateToken");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  //affiche moi une page html avec un upload button
  res.send(`
    <h1>Upload file</h1>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="image" />
      <input type="submit" value="Upload" />
    </form>
  `);
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("File uploaded");
});

app.use("/accomodations", routerAccomodation);

app.use("/users", routerUser);

app.use("/follows", authenticateToken, routerFollow);

app.use("/auth", authRouter);

app.use("/notifications", authenticateToken, routerNotification);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
