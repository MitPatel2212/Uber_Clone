const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationsResult } = require('express-validator');

module.exports.registerCaptain = async (req, res,next) => {
    const errors = validationsResult (req);
    if (!errors.isEmpty()) {
        return res.ststus(400).json({ errors : errors.array()});
    }

    const { fullname, email, pssword, vehicle} = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });
    if (isCaptainAlreadyExist) {
        return res.status(409).json({ message: 'Captain already exist'})

    }

    const  hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firtname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        passwod: hashedPassword,
        color: vehicle.color,
        palce: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.geenerateAuthToken();

    res.status(201).json({ captain, token });
}