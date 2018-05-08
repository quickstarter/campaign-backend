const fs = require('fs');
const faker = require('faker');

const pickBackers = (numBackers) => {
  const backers = {};
  let count = 0;
  while (count < numBackers) {
    const backerId = Math.floor(Math.random() * 1000);
    if (!backers[backerId]) {
      backers[backerId] = true;
      count++;
    }
  }
  return Object.keys(backers).map(el => +el);
};

const writeProjects = () => {
  let notFull = true;
  while (j < 1e7 && notFull) {
    notFull = projects.write(JSON.stringify({
      _id: j,
      title: faker.commerce.productName(),
      creator: faker.company.companyName(),
      backerIds: pickBackers(Math.random() * 100),
    }));
    j++;

    if (!(j % 1000000)) {
      console.log(`Wrote ${j} projects, time elapsed: ${new Date().getTime() - start}`);
    }
  }
  if (j === 1e7) {
    projects.end();
  }
};

const writeUsers = () => {
  let notFull = true;
  while (i < 1e6 && notFull) {
    notFull = users.write(JSON.stringify({
      _id: i,
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      city: faker.address.city(),
      country: faker.address.country(),
      fundedProjects: Math.floor(Math.random() * 10),
      avatar: faker.image.avatar(),
    }));
    i++;
  }
  if (i === 1e6) {
    users.end();
  }
};

const projects = fs.createWriteStream('./_projects.json');
const users = fs.createWriteStream('./_users.json');
const start = new Date().getTime();
let i = 0;
let j = 0;

projects.on('drain', writeProjects);
users.on('drain', writeUsers);

writeProjects();
writeUsers();
