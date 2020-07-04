const express = require('express');

const db = require('./models');

const authController = require('./controllers/auth');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authController);

app.get('/', (req, res) => {
  return res.json('Api Running');
});

db.sequelize.sync().then(() => {
  app.listen(3001, (err) => {
    if (err) console.log('Erro ao conectar');
    console.log('Sucesso');
  });
});
