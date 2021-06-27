const express = require('express');
const morgan = require('morgan');
var exphbs  = require('express-handlebars');
var path = require('path');
const route = require('./routes/index');
const db = require('./config/db/index');
const { NotExtended } = require('http-errors');
const app = express();
const port = 3000;

// Connect to DB
db.connect();

// Static file
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});