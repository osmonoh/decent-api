const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const fruitRoutes = require("./routes/fruitRoutes");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));

app.use(express.json());

app.use("/", mainRoutes);
app.use("/fruits", fruitRoutes);

app.listen(PORT, () => console.log("Server running on port: ", PORT));
