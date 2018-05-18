const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./client/routes.js');

const app = express();
const port = 8080;

app.set('views', path.join(__dirname, '/client/views/'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded());
app.use('/', router);
app.use(express.static(path.join(__dirname, '/client/public/')));
app.listen(port, () => { console.log('app started!'); });
