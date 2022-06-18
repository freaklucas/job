"use strict";

var express = require("express");

var router = express.Router();

var Job = require("../models/Job"); // testing route


router.get("/test", function (req, res) {
  res.send("Jobs route is working");
}); // add job

router.post("/add", function (req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      description = _req$body.description,
      salary = _req$body.salary,
      company = _req$body.company,
      email = _req$body.email,
      new_job = _req$body.new_job;
  Job.create({
    title: title,
    description: description,
    salary: salary,
    company: company,
    email: email,
    new_job: new_job
  }).then(function () {
    return res.redirect("/");
  })["catch"](function (err) {
    return console.log(err);
  });
});
module.exports = router;