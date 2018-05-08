const { Pool } = require('pg');

const pool = new Pool({
  user: 'samliebow',
  password: 'sdc',
  host: '127.0.0.1',
  database: 'quickstarter',
});

async function getProjAndBackers(id) {
  try {
    const start = new Date().getTime();
    const project = await pool.query(`SELECT * 
      FROM quickstarter.projects 
      INNER JOIN quickstarter.projects_backers 
        ON quickstarter.projects.id = quickstarter.projects_backers.project
      INNER JOIN quickstarter.users
        ON quickstarter.projects_backers.backer = quickstarter.users.id
      WHERE quickstarter.projects.id = $1::integer;`, [id]);
    const end = new Date().getTime();
    const time = end - start;
    // Commented-out lines used when invoking directly, not as helper
    // console.log('Milliseconds: ', time);
    // console.log(project.rows.length);
    // pool.end();
    return time;
  } catch (error) {
    console.error(error);
  }
}

async function testManyRecordsParallel(n) {
  const promises = [];
  let countdown = n;
  const start = new Date().getTime();
  while (countdown--) {
    const id = Math.floor(Math.random() * 10000000);
    promises.push(getProjAndBackers(id));
  }
  const times = await Promise.all(promises);
  const end = new Date().getTime();
  pool.end();
  const averageRequestTime = times.reduce((memo, time) => memo + time) / n;
  const maxTime = times.reduce((max, time) => Math.max(max, time));
  const minTime = times.reduce((min, time) => Math.min(min, time));
  console.log(`Parallel: Maximum time for a request: ${maxTime}`);
  console.log(`Parallel: Minimum time for a request: ${minTime}`);
  console.log(`Parallel: Average time per request for ${n} requests: ${averageRequestTime} ms`);
  console.log(`Parallel: Total time for ${n} requests: ${end - start} ms`);
}

async function testManyRecordsSequential(n) {
  let countdown = n;
  let totalTime = 0;
  let maxTime = 0;
  const times = [];
  while (countdown--) {
    const id = Math.floor(Math.random() * 10000000);
    const time = await getProjAndBackers(id);
    maxTime = Math.max(maxTime, time);
    times.push(time);
    totalTime += time;
  }
  pool.end();
  console.log(`Sequential: Average time per request for ${n} requests: ${totalTime / n} ms`);
  console.log(`Sequential: Total time for ${n} requests: ${totalTime} ms`);
}

// testManyRecordsParallel(1000);
// testManyRecordsSequential(1000);
