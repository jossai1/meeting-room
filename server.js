// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');

var Question     = require('./app/models/question');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here
// on routes that end in /bears
// ----------------------------------------------------
router.route('/questions')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var question = new Question();      // create a new instance of the Bear model
        question.text = req.body.text;  // set the bears name (comes from the request)

        // save the bear and check for errors
        question.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Question created!' });
        });

    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Question.find(function(err, questions) {
            if (err)
                res.send(err);

            res.json(questions);
        });
    });



    // on routes that end in /bears/:bear_id
// ----------------------------------------------------
router.route('/questions/:q_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Question.findById(req.params.q_id, function(err, question) {
            if (err)
                res.send(err);
            res.json(question);
        });
    })


    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
  .put(function(req, res) {

      // use our bear model to find the bear we want
      Question.findById(req.params.q_id, function(err, question) {

          if (err)
              res.send(err);

          question.text = req.body.text;  // update the bears info

          // save the bear
          question.save(function(err) {
              if (err)
                  res.send(err);

              res.json({ message: 'Question updated!' });
          });

      });
  })


  // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Question.remove({
            _id: req.params.q_id
        }, function(err, question) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
