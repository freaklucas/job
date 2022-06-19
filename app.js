const express = require("express");
const exphbs = require("express-handlebars");

const database = require("./db/connection");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express executing ok in port ${PORT}`);
});

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

//handlebars
app.set("view engine", path.join(__dirname, "views"));
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
  res.send(`Está funcionando na porta ${PORT}`);
});

// jobs routes for acessing in api

app.use("/jobs", require("./routes/jobs"));
