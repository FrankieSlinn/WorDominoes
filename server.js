
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const store = require("store2");
const localStorage = require("localStorage");
const MongoClient = require('mongodb').MongoClient;
var qs = require('querystring');

//console.log(typeof PORT);
var db;

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))




//app.post('/quotes', (req, res) => {  console.log('Hellooooooooooooooooo!')});


MongoClient.connect('mongodb+srv://FranKissling:Franziska1@cluster0.imr1g2z.mongodb.net/star-wars-quotes', (err, database) => {
 if (err) return console.log(err)
    db = database.db('star-wars-quotes')
    app.listen(process.env.PORT || 3000, () => {
      console.log('listening on 3000')
    }
  )})



//mongoose.connect(mongoDB, (err, database) => {  if (err) return console.log(err)  db = database  app.listen(3000, () => {    console.log('listening on 3000')  })})

//const mongoose = require("mongoose");
//const mongoDB = "mongodb+srv://FranKissling:Franziska1@cluster0.imr1g2z.mongodb.net/?retryWrites=true&w=majority";
//MongoClient.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
//const db = mongoose.connection;
//db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.post('/quotes', (req, res) => {
    db.collection('quotes').insertOne(req.body, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/')
    })
  })

  app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('hallOfFame.ejs', {quotes: result})
    })
  })

  //SET PORT=8000 && nodemon app.js

  console.log("score", JSON.parse(localStorage.getItem("score")));
  console.log("test", JSON.parse(localStorage.getItem("test")));

  app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});  


app.post('/example', (req, res) => {
    console.log(req.body.fname.value);
  console.log(req.body.fname);
  console.log(req.body.value);
});