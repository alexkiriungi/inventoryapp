const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inventory', { userNewUrlparser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));