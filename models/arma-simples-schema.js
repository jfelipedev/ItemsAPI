const { Schema, model } = require("mongoose");

const armasSimpleSchema = new Schema({
  nome: String,
  imgURL: String,
  atk: Number,
  roll: String,
  efeito: String,
  propriedade: String,
});

module.exports = model("Armas_Simples", armasSimpleSchema);
