var express = require('express');
var Mongoose = require('mongoose')
var utils = require('../db/utils.js');

// Middleware
var parser = require('body-parser');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', (process.env.PORT || 3000));

// Logging and parsing
app.use(parser.json());

// Serve the client files
app.use(express.static(__dirname + '/../client/dist'));


// Handle Get requests
app.get('/api/community/:id', (req, res) => {
  console.log(`Handling get request`);
  utils.loadProject(req.params.id, (project) => {
    console.log(`Retrieving backers from project:`, project);
    utils.loadBackers(project[0].backerIds, (backers) => {
      res.json(backers);
    })
  });
})

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}