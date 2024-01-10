const mongoose = require('mongoose');
const uri = ''
const connectDabase = () => {
    mongoose.connect(process.env.DATABASE);
    console.log("Database Connected");
};

module.exports = connectDabase;