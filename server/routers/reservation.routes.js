const express = require('express');
const router = express.Router();
const reservationCtrl = require('../controllers/reservation.controllers');

router.get('/', reservationCtrl.getUsers);
router.post('/', reservationCtrl.createUsers);
router.get('/:id', reservationCtrl.getUser);
router.put('/:id', reservationCtrl.editUsers);
router.delete('/:id', reservationCtrl.deleteUsers);

module.exports = router;