const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require("express-handlebars");
const session = require("express-session");
const passport = require('passport');
const mongoose = require("./config/db");
let MongoStore = require('connect-mongo');
const bodyParser = require("body-parser");


mongoose.mongoose();

const hbshelpers = require("handlebars-helpers");
const multihelpers = hbshelpers();


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let cartRouter = require('./routes/cart');
let Cart = require('./model/cart');


var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    helpers: multihelpers,
    defaultView: "main",
    layoutsDir: __dirname + "/views/layout/",
    partialsDir: __dirname + "/views/partials/",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'mysupersecret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://ezoder:tkpm20202021@cluster0.ewaw9.mongodb.net/ezorder-database' }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
})

app.use((req,res,next) =>{
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  req.session.cart = cart;
  res.locals.cart = cart;
  next();
})



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cart', cartRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
