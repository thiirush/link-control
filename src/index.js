const express = require('express');

const db = require('./models');

const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt')

const authController = require('./controllers/auth');
const linkController = require('./controllers/link');

const app = express();

app.use(response);
app.use(checkJwt)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authController);
app.use('/link', linkController);

app.get('/', (req, res) => res.json('Api Running'));

db.sequelize.sync().then(() => {
  app.listen(3001, (err) => {
    if (err) console.log('Erro ao conectar');
    console.log('Sucesso');
  });
});
