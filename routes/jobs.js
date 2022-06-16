const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// add job
router.post("/add", (req, res) => {
  let { title, description, salary, company, email } = req.body;

  Job.create({
    title,
    description,
    salary,
    company,
    email,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});
