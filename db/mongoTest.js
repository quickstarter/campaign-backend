const mongoose = require('mongoose');
const Projects = require('./Project.js').project;
const Users = require('./Project.js').user;

async function getProjAndBackers(id) {
  // Commented-out lines used when invoking directly, not as helper
  // await mongoose.connect('mongodb://127.0.0.1/quickstarter');
  try {
    const start = new Date().getTime();
    const project = await Projects.findById(id);
    const backers = await Users.find({ _id: { $in: project.backerIds } });
    const end = new Date().getTime();
    const time = end - start;
    // console.log(`Milliseconds: ${time}`);
    // console.log(`Number of backers: ${backers.length}`);
    // mongoose.disconnect();
    return time;
  } catch (error) {
    console.error(error);
    mongoose.disconnect();
  }
}

async function testManyRecordsParallel(n) {
  const promises = [];
  let countdown = n;
  await mongoose.connect('mongodb://127.0.0.1/quickstarter');
  const start = new Date().getTime();
  while (countdown--) {
    const id = Math.floor(Math.random() * 10000000);
    promises.push(getProjAndBackers(id));
  }
  const times = await Promise.all(promises);
  const end = new Date().getTime();
  mongoose.disconnect();
  const averageRequestTime = times.reduce((memo, time) => memo + time) / n;
  console.log(`Parallel: Average time per request for ${n} requests: ${averageRequestTime} ms`);
  console.log(`Parallel: Total time for ${n} requests: ${end - start} ms`);
}

async function testManyRecordsSequential(n) {
  let countdown = n;
  let totalTime = 0;
  const times = [];
  await mongoose.connect('mongodb://127.0.0.1/quickstarter');
  while (countdown--) {
    const id = Math.floor(Math.random() * 10000000);
    const time = await getProjAndBackers(id);
    times.push(time);
    totalTime += time;
  }
  mongoose.disconnect();
  console.log(`Sequential: Average time per request for ${n} requests: ${totalTime / n} ms`);
  console.log(`Sequential: Total time for ${n} requests: ${totalTime} ms`);
}


async function testMinMaxSequentialTimes(n) {
  let i = 0;
  const queue = {};
  const waits = [];
  await mongoose.connect('mongodb://127.0.0.1/quickstarter');

  const startTime = new Date().getTime();
  while (i < n) {
    const id = Math.floor(Math.random() * 10000000);
    queue[i] = id;
    i++;
  } // This while loop takes <5 ms for 10k items
  // So it's not a notable impact on the wait time

  i = 0;
  while (i < n) {
    await getProjAndBackers(queue[i]);
    const wait = new Date().getTime() - startTime;
    waits.push(wait);
    i++;
  }
  const totalTime = waits[waits.length - 1];
  mongoose.disconnect();

  const maxWait = waits.reduce((max, wait) => Math.max(max, wait));
  const minWait = waits.reduce((min, wait) => Math.min(min, wait));
  const avgWait = waits.reduce((sum, wait) => sum + wait) / n;
  console.log(`Sequential: Maximum wait for a request: ${maxWait}`);
  console.log(`Sequential: Minimum wait for a request: ${minWait}`);
  console.log(`Sequential: Average wait for a request: ${avgWait} ms`);
  console.log(`Sequential: Total time for ${n} requests: ${totalTime} ms`);
}

// testManyRecordsParallel(1000);
// testManyRecordsSequential(1000);
// testMinMaxSequentialTimes(1000);
