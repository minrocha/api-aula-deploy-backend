require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

try {
  app.get('/', async (req, res) => {
    console.log('ok');
    return res.json('A api está ok');
  });
} catch (error) {
  console.log(error);
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
