const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();
const mongoose = require('mongoose');

const indexRouter = require('./routes/index')
const scoresRouter=require('./routes/scores')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('./'));
app.use(express.static(__dirname + '/public'));
const mdb = mongoose.connection;
const MongoClient = require('mongodb').MongoClient;
var qs = require('querystring');
const port = process.env.PORT || 3000; app.listen (port, () => {console.log (`Listening on port $ {port}...`)});

const dbConfig = require('./config/db')

mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mdb.on('error', (error) => console.log(`ERROR: ${error.message}`))
mdb.on('connected', () => console.log(`MongoDB Connected: ${dbConfig}`))
mdb.on('disconnected', () => console.log('MongoDB Disconnected'))
//var db;

// let db = ('star-wars-quotes')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');






//MongoClient.connect('mongodb+srv://FranKissling:Franziska1@cluster0.imr1g2z.mongodb.net/star-wars-quotes', (err, database) => {
 //if (err) return console.log(err)
   // db = database.db('star-wars-quotes')
    
   // }
  //)
  
  app.get('/', (req, res) => {
    res.render('index.ejs');
  });

  const Score = require('./models/score'); // Adjust the path to your score model file
  app.get('/scores', (req, res) => {
    Score.find().sort({ score: -1 })
      .then(results => {
        res.render('scores.ejs', { scores: results });
      })
      .catch(err => {
        console.error('Error fetching scores from database:', err);
        res.status(500).send('Error fetching scores from database.');
      });
  });
app.use(indexRouter)
app.use(scoresRouter)






 //This worked
 /*
 app.get('/', (req,res)=>{
  // render method takes two parameters
  // first parameter should be the .ejs file
  // second parameter should be an object
  // which is accessible in the .ejs file  
  // this .ejs file should be in views folder 
  // in the root directory.
  res.render('index.ejs', {firstName: "Geeks,", 
                           lastName: "A Computer Science Portal"});
})*/

// Start the server



//const mongoose = require("mongoose");
//const mongoDB = "mongodb+srv://FranKissling:Franziska1@cluster0.imr1g2z.mongodb.net/?retryWrites=true&w=majority";
//MongoClient.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
//const db = mongoose.connection;
//db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app.post('/example', (req, res) => {
//  //db.collection('quotes').deleteOne({name:"Moi!"}) 

//   db.collection('quotes').insertOne(req.body, (err, result) => 
//   {
//       if (err) return console.log(err)
      
//       console.log('saved to database')
   
//       res.redirect('/') 
//   })
// })













