const express = require('express');

const router = express.Router();

const activitiesRouter = require('./activitiesRouter');
const signUpRouter = require('./signUpRouter');

router.use(activitiesRouter)
router.use(signUpRouter)

module.exports = router;