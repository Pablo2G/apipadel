const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users.controllers');

router.get('/', usersCtrl.getUsers);
router.post('/', usersCtrl.createUsers);
router.get('/:id', usersCtrl.getUser);
router.put('/:id', usersCtrl.editUsers);
router.delete('/:id', usersCtrl.deleteUsers);

module.exports = router;