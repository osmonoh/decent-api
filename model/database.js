const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./model/db.json");
const db = low(adapter);

const fruits = require("./fruits");

db.defaults({ fruits: fruits });
// .write();

module.exports = db;
