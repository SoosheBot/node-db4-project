const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const carsRouter = require('../routers/carsRouter');
const salesRouter = require('../routers/salesRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/recipes', recipesRouter);


module.exports = server;