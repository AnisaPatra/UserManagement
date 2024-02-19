// backend/routes/users.js
const express = require('express');
const router = express.Router();
const {getUsers,getUserById,createUser,deleteUser} = require('../model/UserModel');

// Routes
router.get('/', getUsers);
router.get('/:username', getUserById);
router.post('/', createUser);
router.delete('/:username', deleteUser);

module.exports = router;
