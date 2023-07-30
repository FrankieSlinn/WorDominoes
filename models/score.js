const mongoose = require('mongoose')


//
const scoreSchema = new mongoose.Schema({
    lname: {type: String, required: false},
    score: String
}, {timestamps: true})

//Compile model based on schema
const Score = mongoose.model('Score', scoreSchema)

//Export model for use

module.exports = Score