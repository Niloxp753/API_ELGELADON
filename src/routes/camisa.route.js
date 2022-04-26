const route = require('express').Router();
const controllerCamisas = require('../controllers/camisa.controller');
const {
  validId,
  validObjectBody,
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

module.exports = route;
