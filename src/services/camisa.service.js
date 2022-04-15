const camisas = [
  {
    id: 1,
    sabor: 'Camisa Barcelona',
    descricao: `Indicado para: Jogo |
        Clube: Internacional |
        Time: Barcelona |
        Material: Poliéster`,
    foto: './assets/images/barcelona.png',
    preco: 'R$ 189,99',
  },
  {
    id: 2,
    sabor: 'Camisa Real Madrid',
    descricao: `Indicado para: Jogo |
      Clube: Internacional |
      Time: Real Madrid |
      Material: Poliéster`,
    foto: './assets/images/realmadrid.png',
    preco: 'R$ 289,99',
  },
  {
    id: 3,
    sabor: 'Camisa Arsenal',
    descricao: `Indicado para: Jogo |
      Clube: Internacional |
      Time: Arsenal |
      Material: Poliéster`,
    foto: './assets/images/arsenal.png',
    preco: 'R$ 199,99',
  },
  {
    id: 4,
    sabor: 'Camisa Bayern',
    descricao: `Indicado para: Jogo |
      Clube: Internacional |
      Time: Bayern de Munique|
      Material: Poliéster`,
    foto: './assets/images/bayern.png',
    preco: 'R$ 269,99',
  },
];

const findAllCamisasService = () => {
  return camisas;
};

const findByIdCamisaService = (parametroId) => {
  return camisas.find((camisa) => camisa.id === parametroId);
};

const createCamisaService = (newCamisa) => {
  const newId = camisas.length + 1;
  newCamisa.id = newId;
  camisas.push(newCamisa);
  return newCamisa;
};

const updateCamisaService = (id, camisaEdit) => {
  camisaEdit['id'] = id;
  const camisaIndex = camisas.findIndex((camisa) => camisa.id == id);
  camisas[camisaIndex] = camisaEdit;
  return camisaEdit;
};

const deleteCamisaService = (id) => {
  const camisaIndex = camisas.findIndex((camisa) => camisa.id == id);
  return camisas.splice(camisaIndex, 1);
};

module.exports = {
  findAllCamisasService,
  findByIdCamisaService,
  createCamisaService,
  updateCamisaService,
  deleteCamisaService,
};
