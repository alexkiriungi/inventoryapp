const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/categories', async(req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description
    });
    await category.save();
    res.send(category);
});

app.post()

mongoose.connect('mongodb://localhost/inventory', {useNewUrlParser: true,
useUnifiedTopology: true});

app.listen(port, ()=> console.log(`Example app listening at http://localhost: ${port}`));
