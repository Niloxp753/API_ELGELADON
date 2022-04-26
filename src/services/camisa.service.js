const Camisas = require('../model/Camisa');

const findAllCamisasService = async () => {
  const allCamisas = await Camisas.find();
  return allCamisas;
};

const findByIdCamisaService = async (idParam) => {
  const oneCamisa = await Camisas.findById(idParam);
  return oneCamisa;
};

const createCamisaService = async (newCamisa) => {
  const createdCamisa = await Camisas.create(newCamisa);
  return createdCamisa;
};

const updateCamisaService = async (idParam, editCamisa) => {
  const updateCamisa = await Camisas.findByIdAndUpdate(idParam, editCamisa);
  return updateCamisa;
};

const deleteCamisaService = async (idParam) => {
  return await Camisas.findByIdAndDelete(idParam);
};

module.exports = {
  findAllCamisasService,
  findByIdCamisaService,
  createCamisaService,
  updateCamisaService,
  deleteCamisaService,
};
