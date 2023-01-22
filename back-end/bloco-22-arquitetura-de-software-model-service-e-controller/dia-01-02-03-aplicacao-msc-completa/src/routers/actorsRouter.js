const express = require('express');
const validateActorName = require('../middlewares/validateActorName');

const { actorController } = require('../controllers')

const router = express.Router();

router.get('/', actorController.allActors)

router.get('/:id', actorController.findById)

router.post('/', validateActorName, actorController.createActor);

router.put('/:id', validateActorName, actorController.editActor);

router.delete('/:id', actorController.deleteActor);

module.exports = router;