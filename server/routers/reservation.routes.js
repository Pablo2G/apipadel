const express = require('express');
const router = express.Router();
const reservationCtrl = require('../controllers/reservation.controllers');

router.get('/', reservationCtrl.getReservations);
router.post('/', reservationCtrl.createReservations);
router.get('/:id', reservationCtrl.getReservation);
router.put('/:id', reservationCtrl.editReservations);
router.delete('/:id', reservationCtrl.deleteReservations);

module.exports = router;