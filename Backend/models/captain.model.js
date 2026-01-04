const mongoose = require('mongoose');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname must be at least 3 characters long '],
        },
        lastname: {
            type: String,
            // required: true,
            minlength: [3, 'Lastname must be at least 3 characters long '],
        }
    },

    email : {
        type: String,
        requied: true,
        unique: true,
        lowercase: true,
        match: [ /^\s+@\s+\.\s+$/, 'Please enter a valid email']
    },

    password : {
        type: String,
        required: true,
        slelect: false,
    },
    socketId: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    status:  {
        type:String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlenghth: [3, 'Color must be at least 3 characters long'],
            },
        plate: {
            type: String,
            required: true,
            minlenghth: [3, '[plate must be at lest 3 caracters long']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },

        vehicletype: {
            type: String,
            required: true
        }

    },

    location: {
        lat: {
            type: Number,
        },
        lng: {
            type:Number,        }
    }
})

captainSchema.methods.genenrateAuthToken = function() {
    const token = jwt.sign({_id: this._id }, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.methods.generateAuthToken = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.methods.hasshpassword = async function (password) {
    return await bcrypt.hash(password, 10);

}




const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;
