require('dotenv').config();
const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

try {
  app.get('/', async (req, res) => {
    const carros = await knex('carros');

    return res.json(carros);
  });
} catch (error) {
  return res.status(500).json({ message: 'Erro do servidor' });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
