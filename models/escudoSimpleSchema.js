const { Schema, model } = require('mongoose');

const escudoSimpleSchema = new Schema({
  nome: String,
  imgURL: String,
  def: Number,
  efeito: String,
});

module.exports = model('Escudos_Simples', escudoSimpleSchema);


