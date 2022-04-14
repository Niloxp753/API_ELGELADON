const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const paletas = [
  {
    id: 1,
    sabor: 'Camisa Barcelona',
    descricao:
      `Indicado para: Jogo |
      Clube: Internacional |
      Time: Barcelona |
      Gola: Gola Careca |
      Material: Poliéster |
      Tipo: Torcedor`,
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
    Gola: Gola em V |
    Material: Poliéster |
    Tipo: Torcedor`,
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
    Gola: Gola Careca |
    Material: Poliéster |
    Tipo: Torcedor`,
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
    Gola: Gola em V |
    Material: Poliéster |
    Tipo: Torcedor`,
    foto: './assets/images/bayern.png',
    preco: 'R$ 269,99',
  },
];

app.get('/paletas/todas-paletas', (req, res) => {
  res.send(paletas);
});

app.get('/paletas/paleta/:id', (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPaleta = paletas.find((paleta) => paleta.id === parametroId);
  res.send(escolhaPaleta);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});
