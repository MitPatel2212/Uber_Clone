const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min : 3 }).withMessage('first name must be at east 3 charecrers long'),
    body('password').isLength({ min: 6}).withMessage('password must be arleast 6 charecters Long'),
    body('vehicle.color').isLength({ min: 3}).withMessage('color must be at least 3 charecters Long'),
    body('vehicle.plate').isLength({ min: 3}).withMessage('plate must be at least 3 charecters Long'),
    body('vehicle.capacity').isInt({ min: 1}).withMessage('capacity must be at least 1'),
    body('vehicle.vehicletype').isIn(['car', 'bike', 'truck']).withMessage('Capcacity must be at least 1'),
],
    captainController.registerCaptain
);

module.exports = router;