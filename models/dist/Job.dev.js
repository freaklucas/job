"use strict";

var Sequelize = require("sequelize");

var db = require("../db/connection.js");

var Job = db.define("job", {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  salary: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  new_job: {
    type: Sequelize.INTEGER
  }
});
module.exports = Job;