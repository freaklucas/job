const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express está rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Está funcionando na porta ${PORT}`);
});
