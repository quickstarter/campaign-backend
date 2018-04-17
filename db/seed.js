const faker = require('faker');
const db = require('./index.js');
const User = require('./Project.js').user;
const Project = require('./Project.js').project;


const users = [];

for (let i = 0; i < 1000; i++) {
  const user = {};
  user.id = i;
  user.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  user.city = faker.address.city();
  user.country = faker.address.country();
  user.avatar = faker.image.avatar();
  user.fundedProjects = (Math.floor(Math.random() * 10));
  users.push(user);
}

console.log(users);


const projects = [];

for (let i = 0; i < 100; i++) {
  const project = {};
  const n = Math.floor(Math.random() * 1000);
  project.id = i;
  project.title = faker.commerce.productName();
  project.creator = faker.company.companyName();
  project.backerIds = [];
  for (let k = 0; k < n; k++) {
    const backerId = Math.floor(Math.random() * 1000);
    if (!project.backerIds.includes(backerId)) {
      project.backerIds.push(backerId);
    }
  }
  projects.push(project);
}

console.log(projects);


const insertUsers = () => {
  User.create(users)
    .then(() => db.disconnect());
};

insertUsers();

const insertProjects = () => {
  Project.create(projects)
    .then(() => db.disconnect());
};

insertProjects();
