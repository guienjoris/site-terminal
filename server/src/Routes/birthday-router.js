const express = require('express');
const birthdayController = require('../Controller/birthday-ctrl')

const router = express.Router();

router.get('/getBirthday', birthdayController.getBirthday);

module.exports = router;