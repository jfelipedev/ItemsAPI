const { Schema, model } = require('mongoose');

const setSimpleSchema = new Schema({
  nome: String,
  imgURL: String,
  arm: Number,
  roll: String,
  efeito: String,
  propriedade: String,
});

module.exports = model('Set_Simples', setSimpleSchema);


