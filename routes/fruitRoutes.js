const express = require("express");
const {
  getFruits,
  getFruit,
  postFruit,
  putFruit,
  patchFruit,
  deleteFruit,
} = require("../controllers/fruitControllers");

const Router = express.Router();

Router.get("/", getFruits);

Router.get("/:id", getFruit);

Router.post("/", postFruit);

Router.put("/:id", putFruit);

Router.patch("/:id", patchFruit);

Router.delete("/:id", deleteFruit);

module.exports = Router;
