const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json('Api Running');
});

app.listen(3001, (err) => {
  if (err) console.log('Erro ao conectar');
  console.log('Sucesso');
});
