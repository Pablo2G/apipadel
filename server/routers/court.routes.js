const express = require('express');
const router = express.Router();
const courtCtrl = require('../controllers/court.controllers');

router.get('/', courtCtrl.getUsers);
router.post('/', courtCtrl.createUsers);
router.get('/:id', courtCtrl.getUser);
router.put('/:id', courtCtrl.editUsers);
router.delete('/:id', courtCtrl.deleteUsers);

module.exports = router;