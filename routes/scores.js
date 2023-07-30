const express = require ('express')

//Require Mongoose MOdel for Score
const Score = require('../models/score')

//Instantiate a Router
const router = express.Router()

router.get('/scores', (req, res)=>{
    Score.find()
    .then((allScores)=>{
        res.json({scores: allScores})

    })
    .catch((error)=>{
        res.status(500).json({error: error})
    })
})

router.post('/scores', async (req, res) => {
    try {
      // Get the data from the request body
      const { lname, score } = req.body;
  
      // Create a new score object using the Score model
      const newScore = new Score({ lname, score });
  
      // Save the new score to the database
      const savedScore = await newScore.save();
  
      // Respond with the saved score data
      res.status(201).json(savedScore);
    } catch (err) {
      // If there's an error, respond with an error message
      res.status(500).json({ error: 'Could not save the score.' });
    }
  });

  router.delete("/scores/:id", (req, res) => {
    Score.findByIdAndRemove(req.params.id)
      .then((deletedScore) => res.json(deletedScore))
      .catch((error) => {
        console.log(error);
        res.status(500).send("Internal Server Error");
      });
  });
  

module.exports=router