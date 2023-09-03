const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser= require('body-parser');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index')
const scoresRouter=require('./routes/scores')
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(express.json())
app.use(express.static('./'));
app.use(express.static(__dirname + '/public'));
//prevent caching from server side in development. Can maybe remove in production. 
app.set('view cache', false);
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



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');


  
  app.get('/', (req, res) => {
    res.render('index.ejs');
  });

 const Score = require('./models/score'); 
  app.get('/scores', (req, res) => {
    Score.find().sort({ score: -1 })
      .then(results => {
        res.render('scores.ejs', { scores: results }); // Render HTML for browser requests

      })
      .catch(err => {
        console.error('Error fetching scores from database:', err);
        res.status(500).send('Error fetching scores from database.');
      });
  });
  
app.use(indexRouter)
app.use(scoresRouter)

















