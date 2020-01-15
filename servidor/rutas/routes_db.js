const express = require("express");
let api = express.Router(),
  control = require("../controles/crud"),
  numeros = require("../../bingo");  

api.get("/bingo", control.getDatos);
api.post("/bingo", control.postDatos);
api.put("/bingo", control.updateDatos);
api.delete("/bingo", control.deleteDatos);
api.get("/bingobyid", control.getDatosbyID);
api.post("/login", control.login);


api.get("/nums", numeros.lanzar);


module.exports = api;
