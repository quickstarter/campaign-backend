const express = require('express');
const utils = require('../db/utils.js');

// Middleware
const parser = require('body-parser');

const app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', (process.env.PORT || 3005));

// Logging and parsing
app.use(parser.json());

// Serve the client files
app.use(express.static(`${__dirname}/../client/dist`));


// Handle Get requests
app.get('/api/community/:id', (req, res) => {
  console.log('Handling get request');
  utils.loadProject(req.params.id, (project) => {
    console.log(project);
    var project = project[0];
    console.log('Retrieving backers from project:', project);
    utils.loadBackers(project.backerIds, (backers) => {
      res.json([project, backers]);
    });
  });
});

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
