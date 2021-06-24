const { response } = require("express");
const express = require("express");
const { configData, methods } = require("../model/configData");

const Route = express.Router();

Route.get("/", (req, res) => {
  res.render("index", methods);
});

Route.get("/configData", (req, res) => {
  res.send(configData);
});

module.exports = Route;
