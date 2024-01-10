const express = require('express');
const item = require('./item');

const router = express.Router();

//creating a new item
router.post('/items', async (req, res) => {
    const { name, description, category, price, quantity } = req.body;
    try {
        const item = new item({ name, description, category, price, quantity});
        await item.save();
        res.send(item);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

//getting all items
router.get('/items', async (req, res) => {
    try {
        const items = await item.find({});
        res.send(items);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

//Update an item
router.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, category, price, quantity } = req.body;

    try {
        const item = await item.findByIdAndUpdate(id, { name, description, category, price, quantity}, { new: true});
        res.send(item);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

//delete an item
router.delete('/items/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const item = await item.findByIdAndDelete(id);
        res.send(item);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;

