const express = require('express');
const ejs = require('ejs');
const path = require('path'); 
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var qs = require('querystring');
const port = process.env.PORT || 3000; app.listen (port, () => {console.log (`Listening on port $ {port}...`)});
//const control = require("./control.js") 
//const quotes1 = "Variables work"
//console.log(typeof PORT);
var db;


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'));
//app.engine('html', require('ejs').renderFile);



//app.post('/quotes', (req, res) => {  console.log('Hellooooooooooooooooo!')});

MongoClient.connect('mongodb+srv://FranKissling:Franziska1@cluster0.imr1g2z.mongodb.net/star-wars-quotes', (err, database) => {
 if (err) return console.log(err)
    db = database.db('star-wars-quotes')

    }
  )
  app.get('/', (req,res)=>{
    res.render('index.ejs')
  })

//test
app.get('/hallOfFame', (req,res)=>{
  db.collection('quotes').find().sort({score:1})
  db.collection('quotes').find().toArray()
    .then(results => {
      res.render('hallOfFame.ejs', { quotes: results })
    })
})


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
app.post('/example', (req, res) => {
  db.collection('quotes').insertOne(req.body, (err, result) => 
  {
      if (err) return console.log(err)
      
      console.log('saved to database')
   
      res.redirect('/')

   
  })
})


app.get('/example', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})

app.get('"/minVal"', (req, res) => {
console.log("min", min)
  res.render('index.ejs', {min: min})
})


/*
  app.post('/example', (req, res) => {
    
    res.send(`Full name is:${req.body.score} ${req.body.lname}`);

  });*/
  

  /*
  app.listen(port, () => {
    console.log(`Server running on port${port}`);
  });*/
