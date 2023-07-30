const express = require ('express')

//Instantiate a Router
const router = express.Router()


router.get('/', (req,res) =>{
    res.json({message: 'Welcome to Blogy'})
})
//Export the Router so we can use it in the 'server.js' file
module.exports = router