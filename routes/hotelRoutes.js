const express = require('express');
const { createHotel } = require('../controllers/hotelControllers');
const authentificateToken = require('../middleware/authJwt');
const router = express.Router();

router.post('/create-hotel', createHotel)

module.exports = router