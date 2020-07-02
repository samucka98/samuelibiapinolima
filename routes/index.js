const express = require('express');
const routes = express();

routes.set('view engine', 'ejs');

routes.get('/', (request, response) => {
  response.render('pages/main/index');
});


module.exports = routes;
