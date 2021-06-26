const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const fruitRoutes = require("./routes/fruitRoutes");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views"));

app.use(express.json());

app.use("/", mainRoutes);
app.use("/api/fruits", fruitRoutes);

// finish error handling
app.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = "Page not found";
  res.json(err);
});

app.listen(process.env.PORT || PORT, () =>
  console.log("Server running on port: ", PORT)
);
