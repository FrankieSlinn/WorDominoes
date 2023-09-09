const express = require ('express')

const Minimum = require('../models/minimum')

//Instantiate a Router
const router = express.Router()

//Get minimum value of Hall of Fame from database

// router.get('/:id', (req, res)=>{
//     Minimum.find()

//     .then((allScores)=>{
//         console.log(allScores)
//         res.json({allScores})

//     })
//     .catch((error)=>{
//         res.status(500).json({error: error})
//     })
// })
//Export the Router so we can use it in the 'server.js' file
module.exports = router