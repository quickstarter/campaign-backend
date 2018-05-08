const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  creator: String,
  backerIds: [Number],
});

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  city: String,
  country: String,
  fundedProjects: Number,
  avatar: String,
});

const Project = mongoose.model('projects', projectSchema);
const User = mongoose.model('users', userSchema);

module.exports.project = Project;
module.exports.user = User;
