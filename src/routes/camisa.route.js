const route = require('express').Router();
const controllerCamisas = require('../controllers/camisa.controller');
const controllerCarrinho = require('../controllers/carrinho.controller');

const {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} = require('../middlewares/camisa.middleware');

route.get('/all-camisas', controllerCamisas.findAllCamisasController);
route.get(
  '/one-camisa/:id',
  validId,
  controllerCamisas.findByIdCamisaController,
);
route.post(
  '/create-camisa',
  validObjectBody,
  controllerCamisas.createCamisaController,
);
route.put(
  '/update-camisa/:id',
  validId,
  validObjectBody,
  controllerCamisas.updateCamisaController,
);
route.delete(
  '/delete-camisa/:id',
  validId,
  controllerCamisas.deleteCamisaController,
);

route.get('/all-carrinho', controllerCarrinho.findAllCarrinhoController);

route.post(
  '/create-carrinho', 
  validObjectBodyCarrinho,
  controllerCarrinho.createManyItemsCarrinhoController,
);

route.delete(
  '/finish-carrinho',
  controllerCarrinho.deleteAllItemsCarrinhoController,
);

module.exports = route;
