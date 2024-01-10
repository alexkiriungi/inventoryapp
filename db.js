const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb://0.0.0.0:3000/', process.env.DATABASE);
    console.log("Database Connected");
};

module.exports = connectDatabase;