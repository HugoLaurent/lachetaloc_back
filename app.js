const express = require("express");

const routerLogement = require("./router/logement");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/logements", routerLogement);
app.use("/logements/:id", routerLogement);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
