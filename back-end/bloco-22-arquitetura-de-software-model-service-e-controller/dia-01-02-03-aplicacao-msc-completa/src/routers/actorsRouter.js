const express = require('express');

const { actorController } = require('../controllers')

const router = express.Router();

router.get('/', actorController.allActors)

router.get('/:id', actorController.findById)

module.exports = router;