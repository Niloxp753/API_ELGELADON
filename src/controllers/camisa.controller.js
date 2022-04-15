const camisasService = require('../services/camisa.service');

const findAllCamisasController = (req, res) => {
  const camisas = camisasService.findAllCamisasService();
  res.send(camisas);
};

const findByIdCamisaController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaCamisa = camisasService.findByIdCamisaService(parametroId);
  res.send(escolhaCamisa);
};

const createCamisaController = (req, res) => {
  const camisa = req.body;
  const newCamisa = camisasService.createCamisaService(camisa);
  res.send(newCamisa);
};

const updateCamisaController = (req, res) => {
  const parametroId = Number(req.params.id);
  const camisaEdit = req.body;
  const updatedCamisa = camisasService.updateCamisaService(
    parametroId,
    camisaEdit,
  );
  res.send(updatedCamisa);
};

const deleteCamisaController = (req, res) => {
  const parametroId = req.params.id;
  camisasService.deleteCamisaService(parametroId);
  res.send({ message: 'Camisa deletada com sucesso!' });
};

module.exports = {
  findAllCamisasController,
  findByIdCamisaController,
  createCamisaController,
  updateCamisaController,
  deleteCamisaController,
};
