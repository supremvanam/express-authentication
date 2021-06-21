// File: app.js
// Name: Suprem Vanam
// Student ID: 301177430
// Date: 20-JUNE-2021

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Requiring modules related to Auth
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');
const localStrategy = passportLocal.Strategy;
const flash = require('connect-flash');

// Database Setup
const mongoose = require('mongoose');
const DB = require('./db');

// Point mongoose to the DB URI
mongoose.connect(DB.URI, { useNewUrlParser: true,  useUnifiedTopology: true });

// An event to see when we're connected/not connected to the database
const mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console, 'Connection Error'));

// If the connection is open, print it to let the developer know.
mongoDB.once('open', () => {
	console.log('Connected to the MongoDB...');
});

var indexRouter = require('../routes/index');
var userRouter = require('../routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../public/')));
app.use(express.static(path.join(__dirname,'../node_modules')));


// User Model
const User = require('../models/users');

// setup express session
app.use(session({
	secret : "SomeSecret",
  resave : false,
	saveUninitialized: false,
}));

// flash use
app.use(flash());

app.use(function(req, res, next){
  res.locals.error_message = req.flash('error_message');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.session.user;
  next();
});

// initialize passport 
app.use(passport.initialize());
app.use(passport.session());

// authentication
passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding

app.use('/', indexRouter);
app.use('/list', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title : "404 Not Found" });
});

module.exports = app;