const { actorRouter } = require('./routers')

const express = require('express');

const app = express();

app.use(express.json());

app.use('/actors', actorRouter);

module.exports = app;