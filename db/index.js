const mongoose = require('mongoose');

const mongoUrl = 'mongodb://admin:notairbnb@ds259109.mlab.com:59109/community-module';

const db = mongoose.connect(mongoUrl);

module.exports = db;
