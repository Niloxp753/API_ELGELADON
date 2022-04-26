const camisasService = require('../services/camisa.service');
const mongoose = require('mongoose');

const findAllCamisasController = async (req, res) => {
  const allCamisas = await camisasService.findAllCamisasService();
  if (allCamisas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma camisa cadastrada!' });
  }
  res.send(allCamisas);
};

const findByIdCamisaController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCamisa = await camisasService.findByIdCamisaService(idParam);
  if (!chosenCamisa) {
    return res.status(404).send({ message: 'Camisa não encontrada!' });
  }

  res.send(chosenCamisa);
};

const createCamisaController = async (req, res) => {
  const camisa = req.body;
  const newCamisa = await camisasService.createCamisaService(camisa);
  res.status(201).send(newCamisa);
};

const updateCamisaController = async (req, res) => {
  const idParam = req.params.id;
  const editCamisa = req.body;

  const updatedCamisa = await camisasService.updateCamisaService(
    idParam,
    editCamisa,
  );
  res.send(updatedCamisa);
};

const deleteCamisaController = async (req, res) => {
  const idParam = req.params.id;
  await camisasService.deleteCamisaService(idParam);
  res.send({ message: 'Camisa deletada com sucesso!' });
};

module.exports = {
  findAllCamisasController,
  findByIdCamisaController,
  createCamisaController,
  updateCamisaController,
  deleteCamisaController,
};

