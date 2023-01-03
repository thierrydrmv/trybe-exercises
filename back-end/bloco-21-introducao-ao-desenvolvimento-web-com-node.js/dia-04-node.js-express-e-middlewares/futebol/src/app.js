const express = require('express');
const validateTeamBody = require('./middlewares/validateTeamBody');

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.use(express.json());

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if(team) {
    next();
  } else {
    return res.status(404).send({message: 'Id not found'});
  }
}

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
    res.json(team);
});

app.post('/teams', validateTeamBody, (req, res) => {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    return res.status(201).json(team);
});

app.put('/teams/:id', validateTeamBody, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    return res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  return res.sendStatus(204);
});

module.exports = app;