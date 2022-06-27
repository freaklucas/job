const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// testing route

router.get("/test", (req, res) => {
  res.send("Jobs route is working");
});

router.get("/add", (req, res) => {
  res.render("add");
})

//form da rota de view
router.get("/view/:id", (req, res) => Job.findOne({
  where: {
    id: req.params.id
  }
}).then(job => {
  res.render("view", {
    job
  });
}).catch(err => console.log(err)));

//detalhe da vaga

// add job
router.post("/add", (req, res) => {
  let {
    title,
    description,
    salary,
    company,
    email,
    new_job,
    seniority,
  } = req.body;

  Job.create({
      title,
      description,
      salary,
      company,
      email,
      new_job,
      seniority,
    })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;