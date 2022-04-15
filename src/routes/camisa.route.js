const route = require('express').Router();
const controllerCamisas = require('../controllers/camisa.controller');

route.get('/todas-camisas', controllerCamisas.findAllCamisasController);
route.get('/camisa/:id', controllerCamisas.findByIdCamisaController);
route.post('/create', controllerCamisas.createCamisaController);
route.put('/update/:id', controllerCamisas.updateCamisaController);
route.delete('/delete/:id', controllerCamisas.deleteCamisaController);

module.exports = route;
