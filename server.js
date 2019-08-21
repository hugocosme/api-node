//variaveis
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//iniciando a aplicacao
const app = express();
//permitir envio de dados em formato json
app.use(express.json());

//conexao com o banco
mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
 { useNewUrlParser: true }
);

//carregando modulos
requireDir('./src/models');

//rotas
app.use("/api", require("./src/routes"))

//porta onde esta disponivel
app.listen(3001);