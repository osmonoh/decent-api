const express = require("express");
const fruits = require("../model/fruits");
// const db = require("../model/database");
// const fruits = db.get("fruits").value();

const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({
    success: true,
    total: fruits.length,
    data: fruits,
  });
});

Router.get("/:id", (req, res) => {
  const fruit = fruits.find(
    (item) => Number(item.id) === Number(req.params.id)
  );
  if (fruit) {
    res.json({
      success: true,
      data: fruit,
    });
  } else {
    res.json({
      succes: false,
      message: `No fruit with id: ${req.params.id}`,
    });
  }
});

// TODO: finish all these POST, PUT, PATCH, DELETE routes
Router.post("/", (req, res) => {
  if (Object.keys(req.body).length) {
    res.json({ success: true, data: { ...req.body, id: 16 } });
  } else {
    res.json({ success: false, message: "No request body provided" });
  }
});

Router.put("/:id", (req, res) => {
  res.json({ success: true, data: { ...req.body, id: req.params.id } });
});

Router.patch("/:id", (req, res) => {
  const fruit = fruits.find(
    (item) => Number(item.id) === Number(req.params.id)
  );

  if (fruit) {
    res.json({ success: true, data: { ...fruit, ...req.body } });
  } else {
    res.json({
      succes: false,
      message: `No fruit with id: ${req.params.id}`,
    });
  }
});

Router.delete("/:id", (req, res) => {
  const fruit = fruits.find(
    (item) => Number(item.id) === Number(req.params.id)
  );

  if (fruit) {
    res.json({
      success: true,
      message: `Item with id: ${req.params.id} was deleted!`,
    });
  } else {
    res.json({
      succes: false,
      message: `No fruit with id: ${req.params.id}`,
    });
  }
});

module.exports = Router;
