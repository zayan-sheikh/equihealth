const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    streak: { 
        type: Number, 
        required: true
    },
    water: {
        type: Number,
        required: true
    },
    exercise: {
        type: Number,
        required: true
    },
    food: {
        type: Number,
        required: true
    },
    brain: {
        type: Number,
        required: true
    },
    connect: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)

