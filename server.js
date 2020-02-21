const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const recipesRouter = require("./routers/recipesRouter");
const ingredientsRouter = require("./routers/ingredientsRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);

module.exports = server;
