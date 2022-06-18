"use strict";

var Sequelize = require("sequelize");

var sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.db"
});
module.exports = sequelize;