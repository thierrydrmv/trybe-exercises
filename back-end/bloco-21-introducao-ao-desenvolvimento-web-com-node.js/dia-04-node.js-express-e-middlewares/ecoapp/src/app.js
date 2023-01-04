const express = require('express');
const activitiesRouter = require('./routes/activitiesRouter');
const signUpRouter = require('./routes/signUpRouter');

const app = express();

app.use(activitiesRouter);
app.use(signUpRouter);

module.exports = app;