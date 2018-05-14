require('newrelic');
const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const cluster = require('cluster');
const cpuCount = require('os').cpus().length;
const path = require('path');

const { pool, client } = require('../db/connect.js');

if (cluster.isMaster && cpuCount > 1) {
  console.log(`Master ${process.pid} started`);
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code) => {
    if (code) {
      console.log(`Worker ${worker.process.pid} killed by error, code ${code}`);
    } else {
      console.log(`Worker ${worker.process.pid} exited`);
    }
  });
} else {
  const app = express();
  app.set('port', (process.env.PORT || 3006));
  app.use(parser.json());
  app.use(cors());
  app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

  app.get('/api/community/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const cache = await client.getAsync(id);
      let result;
      if (cache) {
        result = JSON.parse(cache);
      } else {
        result = await pool.query(`
          SELECT title, creator, backers, 
            name, city, country, avatar, 
            projects_backed AS "fundedProjects"
          FROM quickstarter.projects 
          INNER JOIN quickstarter.projects_backers 
            ON quickstarter.projects.id = quickstarter.projects_backers.project
          INNER JOIN quickstarter.users
            ON quickstarter.projects_backers.backer = quickstarter.users.id
          WHERE quickstarter.projects.id = $1::integer;`, [id]);
        client.set(id, JSON.stringify(result));
      }
      const { title, creator } = result.rows[0];
      res.json({ title, creator, backers: result.rows });
    } catch (err) {
      console.error(err);
    }
  });

  app.listen(app.get('port'), () => console.log(`Worker ${process.pid} listening on ${app.get('port')}`));
}
