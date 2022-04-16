const camisasService = require('../services/camisa.service');

const findAllCamisasController = (req, res) => {
  const camisas = camisasService.findAllCamisasService();

  if (camisas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma camisa cadastrada!' });
  }

  res.send(camisas);
};

const findByIdCamisaController = (req, res) => {
  const parametroId = Number(req.params.id);

  if (!parametroId) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const escolhaCamisa = camisasService.findByIdCamisaService(parametroId);

  if (!escolhaCamisa) {
    return res.status(404).send({ message: 'Camisa não encontrada!' });
  }

  res.send(escolhaCamisa);
};

const createCamisaController = (req, res) => {
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

  const newCamisa = camisasService.createCamisaService(camisa);
  res.status(201).send(newCamisa);
};

const updateCamisaController = (req, res) => {
  const parametroId = Number(req.params.id);

  if (!parametroId) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const camisaEdit = req.body;

  if (
    !camisaEdit ||
    !camisaEdit.modelo ||
    !camisaEdit.descricao ||
    !camisaEdit.preco ||
    !camisaEdit.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos completos!' });
  }
  const updatedCamisa = camisasService.updateCamisaService(
    parametroId,
    camisaEdit,
  );
  res.send(updatedCamisa);
};

const deleteCamisaController = (req, res) => {
  const parametroId = Number(req.params.id);

  if (!parametroId) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

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
