const express = require("express");
const { methods } = require("../model/configData");

const Route = express.Router();

Route.get("/", (req, res) => {
  res.render("index", methods);
});

module.exports = Route;
