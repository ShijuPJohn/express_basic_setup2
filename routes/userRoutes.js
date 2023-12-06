const express = require('express');
const {getAllUsers, createUser, getUserById, sampleMiddleware} = require("../controllers/userControllers");
const router = express.Router();
router.route('/').get(sampleMiddleware,getAllUsers).post(createUser)
router.route('/:id').get(getUserById)
module.exports = router