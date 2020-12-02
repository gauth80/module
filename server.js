//pas configurée (plus tard)

//modules tiers
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//init modules
const app = express();
app.use(cors());

//config server
const PORT = 8000;

//tester

app.listen(PORT, ()=> {
  console.log(`serveur lançée sur : ${PORT}`);
});
