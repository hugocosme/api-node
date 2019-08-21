//declarando variaves como Const faz com que ela tenha o valor fixo
const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//rotas
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;