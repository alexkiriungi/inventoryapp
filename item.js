const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Category = mongoose.model('Category', userSchema);

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    price: Number,
    quantity: Number
});
const item = mongoose.model('item', itemSchema);

module.exports = item;