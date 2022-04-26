const mongoose = require('mongoose');

const CamisaSchema = new mongoose.Schema({
  modelo: {
    type: String,
    require: true,
  },
  preco: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  foto: {
    type: String,
    require: true,
  },
});

const Camisa = mongoose.model('camisas', CamisaSchema);

module.exports = Camisa;
