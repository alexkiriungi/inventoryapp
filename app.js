const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');

app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, ()=> console.log(`App listening at http://localhost: ${port}`));
