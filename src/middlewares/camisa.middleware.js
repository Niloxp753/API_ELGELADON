const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const camisa = req.body;
  if (
    !camisa ||
    !camisa.modelo ||
    !camisa.descricao ||
    !camisa.preco ||
    !camisa.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos completos!' });
  }
  next();
};

const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.body;

  carrinho.forEach((item) => {
    if (!item || !item.camisaId || !item.quantidade) {
      return res
        .status(400)
        .send({ message: 'Envie todos os campos completos!' });
    }
  });

  next();
};

module.exports = {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
};
