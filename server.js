require('dotenv').config();
const path = require('path');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.static(path.resolve(__dirname, 'styles')));
server.use(routes);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port:${ process.env.PORT }`);
});