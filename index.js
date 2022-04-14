const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const camisas = [
  {
    id: 1,
    sabor: 'Camisa Barcelona',
    descricao:
      `Indicado para: Jogo |
      Clube: Internacional |
      Time: Barcelona |
      Material: Poliéster`,
    foto: './assets/images/barcelona.png',
    preco: 'R$ 189,99',
  },
  {
    id: 2,
    sabor: 'Camisa Real Madrid',
    descricao:
    `Indicado para: Jogo |
    Clube: Internacional |
    Time: Real Madrid |
    Material: Poliéster`,
    foto: './assets/images/realmadrid.png',
    preco: 'R$ 289,99',
  },
  {
    id: 3,
    sabor: 'Camisa Arsenal',
    descricao:
    `Indicado para: Jogo |
    Clube: Internacional |
    Time: Arsenal |
    Material: Poliéster`,
    foto: './assets/images/arsenal.png',
    preco: 'R$ 199,99',
  },
  {
    id: 4,
    sabor: 'Camisa Bayern',
    descricao:
    `Indicado para: Jogo |
    Clube: Internacional |
    Time: Bayern de Munique|
    Material: Poliéster`,
    foto: './assets/images/bayern.png',
    preco: 'R$ 269,99',
  },
];

app.get('/camisas/todas-camisas', (req, res) => {
  res.send(camisas);
});

app.get('/camisas/camisa/:id', (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaCamisa = camisas.find((camisa) => camisa.id === parametroId);
  res.send(escolhaCamisa);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
