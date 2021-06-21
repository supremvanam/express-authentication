// File: routes/index.js
// Name: Suprem Vanam
// Student ID: 301177430
// Date: 20-JUNE-2021

var express = require('express');
var router = express.Router();


var indexController = require('../controllers/index');

router.get('/', indexController.displayHome);

/* GET home page. */
router.get('/home', indexController.displayHome);

/* GET About page. */
router.get('/about', indexController.displayAbout);

/* GET Contact page. */
router.get('/contact', indexController.displayContact);

/* GET Services page. */
router.get('/services', indexController.displayServices);

/* GET Projects page. */
router.get('/projects', indexController.displayProject);

/* GET Login page. */
router.get('/login', indexController.displayLogin);

/* POST Login page. */
router.post('/login', indexController.processLogin);

/* GET Logout page. */
router.get('/logout', indexController.processLogout);

module.exports = router;
