const express = require('express');
const qrcodeController = require('../Controller/qrCode-ctrl')

const router = express.Router();

router.post('/qrcode', qrcodeController.createQrCode );

module.exports = router;