const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: "Alexander",
    description: "I am a full stack developer"
});

const Category = mongoose.model('Category', categorySchema);

// Creating an Item
const itemSchema = new mongoose.Schema({
    name: 'Mitchell',
    descripetion: 'I am a front end developer',
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    price: 550,
    quantity: 5
});

const item = mongoose.model('item', itemSchema);

exports.