const express    = require("express");
const exphbs     = require("express-handlebars");
const database   = require("./db/connection");
const bodyParser = require("body-parser");
const Sequelize  = require("sequelize");
const OP         = Sequelize.Op;

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

const Job = require('./models/Job');

app.listen(PORT, () => {
  console.log(`Express executing ok in port ${PORT}`);
});

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

//handlebars
app.set("view engine", path.join(__dirname, "views"));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static folder

app.use(express.static(path.join(__dirname, 'public')));

// db connection
database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log(`erro in connection the bd ${err}`);
  });

// routes
app.get("/", (req, res) => {
  
  let search = req.query.job;
  let query  = '%' + search + '%'; // PH === PHP  

  if(!search) {
    Job.findAll({order: [
      ['createdAt', 'DESC']
    ]})
    .then(jobs => {
      res.render('index', {
        jobs
      });
    })

    .catch(err => console.log(err));
  }
  else {    
    Job.findAll({
      where: {title: {[OP.like]: query}},
      order: [
      ['createdAt', 'DESC']
    ]})
    .then(jobs => {
      res.render('index', {
        jobs,
        search
      });
    })
    
    .catch(err => console.log(err));
  }
});

// jobs routes for acessing in api

app.use("/jobs", require("./routes/jobs"));
