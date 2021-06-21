var express = require('express');
var router = express.Router();

const passport = require('passport');
const mongoose = require('mongoose');
const passportLocal = require('passport-local');
const localStrategy = passportLocal.Strategy;

const User = require('../models/users');


module.exports.displayHome = (req, res, next) => {
    res.render('partials/home.ejs',{title: 'Home'} );
};

module.exports.displayAbout = (req, res, next) => {
    res.render('partials/about.ejs',{title: 'About'} );
};

module.exports.displayProject = (req, res, next) => {
    res.render('partials/projects.ejs', {title: 'Projects'});
};

module.exports.displayServices = (req, res, next) => {
    res.render('partials/services.ejs', {title: 'Services'});
};

module.exports.displayContact = (req, res, next) => {
    res.render('contact.ejs', {title: 'Contact'});
};

module.exports.displayLogin = (req, res, next) => {
    res.render('auth/login',{title: 'Login'});
};



// Login
module.exports.processLogin  = (req, res,next) => {

    passport.use(new localStrategy(
        function(username, password, done) {
          User.findOne({ username: username, password:password }, function(err, user) {
            //console.log(user);
            if (err)
            { 
                return done(err); 
            }
            if (!user) 
            {
                req.flash( 'error_message','Incorrect username and/or password');
                return done(null, false);
            }
            if (!user.password) 
            {
                req.flash( 'error_message','Incorrect username and/or password');
               return done(null, false);
            }
            return done(null, user);
          });
        }
      ));

// Auth using Passport.js
    passport.authenticate('local', { 
        failureRedirect: '/login', 
        successRedirect: '/list', 
        failureFlash: true, 
    })(req, res, next);
};


module.exports.processLogout =  function (req, res, next) {
    req.logout();
	res.redirect('/login');
};