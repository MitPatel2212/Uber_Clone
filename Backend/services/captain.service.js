const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ( {
    firestname, LAstname, emai, password , capacity, vehicleType 
}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error ('All fields are required');
    }
    const captain = new captainModel.create({
        fulllname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
})
return captain;

}