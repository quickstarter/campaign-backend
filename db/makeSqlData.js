const fs = require('fs');
const faker = require('faker');

const writeProjects = () => {
  let notFull = true;
  while (i < 1e7 && notFull) {
    notFull = projects.write(`"${faker.commerce.productName()}","${faker.company.companyName()}"\n`);
    i++;

    if (!(i % 1e6)) {
      console.log(`Wrote ${i} projects, time elapsed: ${new Date().getTime() - start}`);
    }
  }
  if (i === 1e7) {
    projects.end();
  }
};

const writeUsers = () => {
  let notFull = true;
  while (j < 1e6 && notFull) {
    notFull = users.write(`${faker.name.firstName()} ${faker.name.lastName()},${faker.address.city()},"${faker.address.country()}",${faker.image.avatar()}\n`);
    j++;
  }
  if (j === 1e6) {
    users.end();
  }
};

const pickBackers = (numBackers) => {
  const backers = {};
  let count = 0;
  while (count < numBackers) {
    const backerId = Math.ceil(Math.random() * 1e6);
    if (!backers[backerId]) {
      backers[backerId] = true;
      count++;
    }
  }
  return Object.keys(backers).map(el => +el);
};

const writeProjectsBackers = () => {
  let notFull = true;
  while (k <= 1e7 && notFull) {
    const backers = pickBackers(Math.ceil(Math.random() * 100));
    backers.forEach((backer) => {
      notFull = projectsBackers.write(`${k},${backer}\n`);
    });
    k++;

    if (!(k % 1e6)) {
      console.log(`Wrote ${k} projects with backers, time elapsed: ${new Date().getTime() - start}`);
    }
  }
  if (k > 1e7) {
    projectsBackers.end();
  }
}

const start = new Date().getTime();

let i = 0;
let j = 0;
let k = 1; // The serials start at 1

const projects = fs.createWriteStream('./projects.csv');
const users = fs.createWriteStream('./users.csv');
const projectsBackers = fs.createWriteStream('./projects_backers.csv');

projects.on('drain', writeProjects);
users.on('drain', writeUsers);
projectsBackers.on('drain', writeProjectsBackers);

writeProjects();
writeUsers();
writeProjectsBackers();
