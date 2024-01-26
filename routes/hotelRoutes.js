const express = require('express');
const { createHotel, getAllHotel, deleteHotel, updateHotel } = require('../controllers/hotelControllers');
const authentificateToken = require('../middleware/authJwt');
const multer = require('../middleware/multer-config');
const router = express.Router();

router.post('/create-hotel', multer, createHotel)
router.get('/all-hotel/', getAllHotel)
router.delete('/delete-hotel/:id', deleteHotel)
router.patch('/update-hotel/:id', updateHotel)

module.exports = router