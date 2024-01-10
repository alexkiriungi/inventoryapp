const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');
const connectDabase = require('./db');

connectDabase();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true}));
app.use('/', routes);

app.listen(port, ()=> console.log(`App listening at http://localhost: ${port}`));
