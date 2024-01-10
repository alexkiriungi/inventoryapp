const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: 'Alex',
    description: 'I am a potato',
});

const Category = mongoose.model('Category', userSchema);

const itemSchema = new mongoose.Schema({
    name: 'Potato',
    description: 'I am a potato',
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    price: 300,
    quantity: 2
});
const item = mongoose.model('item', itemSchema);

module.exports = item;