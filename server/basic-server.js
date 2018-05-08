require('newrelic');
const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'samliebow',
  password: 'sdc',
  host: '127.0.0.1',
  database: 'quickstarter',
});

// Set what we are listening on.
app.set('port', (process.env.PORT || 3006));

// Logging and parsing
app.use(parser.json());

// Serve the client files
app.use(express.static(`${__dirname}/../client/dist`));

// enabling CORS requests
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
app.use(cors());

// Handle Get requests
app.get('/api/community/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Handling get request for project ${id}`);
  pool.query(`
    SELECT title, creator, backers, 
      name, city, country, avatar, 
      projects_backed AS "fundedProjects"
    FROM quickstarter.projects 
    INNER JOIN quickstarter.projects_backers 
      ON quickstarter.projects.id = quickstarter.projects_backers.project
    INNER JOIN quickstarter.users
      ON quickstarter.projects_backers.backer = quickstarter.users.id
    WHERE quickstarter.projects.id = $1::integer;`, [id])
    .then((result) => {
      const { title, creator, backers } = result.rows[0];
      const project = { title, creator, backers };
      res.json([project, result.rows]);
    })
    .catch(err => console.error(err));
});

app.listen(app.get('port'), () => console.log('Listening on', app.get('port')));
