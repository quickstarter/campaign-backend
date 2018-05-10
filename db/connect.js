const redis = require('redis');
const bluebird = require('bluebird');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'samliebow',
  password: 'sdc',
  host: '127.0.0.1',
  database: 'quickstarter',
});

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient();
client.on('error', err => console.error(err));
client.on('connect', () => console.log(`Redis connected for ${process.pid}`));

module.exports = {
  pool,
  client,
};
