const express = require('express');
const router = express.Router();
const courtCtrl = require('../controllers/court.controllers');

router.get('/', courtCtrl.getCourts);
router.post('/', courtCtrl.createCourts);
router.get('/:id', courtCtrl.getCourt);
router.put('/:id', courtCtrl.editCourts);
router.delete('/:id', courtCtrl.deleteCourts);

module.exports = router;