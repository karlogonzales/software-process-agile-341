var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var appRoutes = require('../routes/app');
var userRoutes = require('../routes/user');
var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://soen341ub2:soen341ub2@ds145669.mlab.com:45669/teacher_poll');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

app.use(logger('dev'));
app.use(cookieParser());
// Models

app.use('/user', userRoutes);
app.use('/', appRoutes);


var Question = require('./question.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  // APIs
  // select all
  app.get('/questions', function(req, res) {
    Question.find({}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
    });
  });

  // count all
  app.get('/questions/count', function(req, res) {
    Question.count(function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });

  // create
  app.post('/question', function(req, res) {
    var obj = new Question(req.body);
    obj.save(function(err, obj) {
      if(err) return console.error(err);
      res.status(200).json(obj);
    });
  });

  // find by id
  app.get('/question/:id', function(req, res) {
    Question.findOne({_id: req.params.id}, function(err, obj) {
      if(err) return console.error(err);
      res.json(obj);
    })
  });

  // update by id
  app.put('/question/:id', function(req, res) {
    Question.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });

  // delete by id
  app.delete('/question/:id', function(req, res) {
    Question.findOneAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });


  // all other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('Angular 2 Full Stack listening on port '+app.get('port'));
  });
});

module.exports = app;
