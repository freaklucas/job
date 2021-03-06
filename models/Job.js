const Sequelize = require("sequelize");
const db = require("../db/connection.js");

const Job = db.define("job", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  new_job: {
    type: Sequelize.INTEGER,
  },
  seniority : {
    type: Sequelize.STRING,
  },
  localization : {
    type: Sequelize.STRING,
  },
  work_regime : {
    type: Sequelize.STRING,
  }
});

module.exports = Job;
