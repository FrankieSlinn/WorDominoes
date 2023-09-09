//Enables the minimum value to be accessed by the index page

const mongoose = require('mongoose')


//
const minimumSchema = new mongoose.Schema({
    minvalue: {type: String, required: false},
}, {timestamps: true})

//Compile model based on schema
const Minimum = mongoose.model('Minimum', minimumSchema)

//Export model for use

module.exports = Minimum