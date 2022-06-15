const express = require("express");
const database = require("./db/connection");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express executing ok in port ${PORT}`);
});

database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log(`erro in connection the bd ${err}`);
  });

app.get("/", (req, res) => {
  res.send(`Está funcionando na porta ${PORT}`);
});
