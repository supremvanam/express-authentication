// File: users.js
// Name: Suprem Vanam
// Student ID: 301177430
// Date: 31-MAY-2021

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
