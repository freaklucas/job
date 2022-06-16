const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// add job
router.post("/add", (req, res) => {
  Job.create(req.body)
    .then((job) => {
      res.json(job);
    })
    .catch((err) => {
      res.json(err);
    });
});
