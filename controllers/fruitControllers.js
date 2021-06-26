const { fruits } = require("../model/db.json");

const findFruit = (req) =>
  fruits.find((item) => Number(item.id) === Number(req.params.id));

exports.getFruits = (req, res) => {
  res.json({
    success: true,
    total: fruits.length,
    data: fruits,
  });
};

exports.getFruit = (req, res) => {
  const fruit = findFruit(req);
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
};

exports.postFruit = (req, res) => {
  if (Object.keys(req.body).length) {
    res.json({
      success: true,
      data: { ...req.body, id: 16 },
    });
  } else {
    res.json({ success: false, message: "No request body provided" });
  }
};

exports.putFruit = (req, res) => {
  res.json({
    success: true,
    data: { ...req.body, id: req.params.id },
  });
};

exports.patchFruit = (req, res) => {
  const fruit = findFruit(req);
  if (fruit) {
    res.json({
      success: true,
      data: { ...fruit, ...req.body },
    });
  } else {
    res.json({
      succes: false,
      message: `No fruit with id: ${req.params.id}`,
    });
  }
};

exports.deleteFruit = (req, res) => {
  const fruit = findFruit(req);
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
};
