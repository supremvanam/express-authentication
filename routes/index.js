var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Suprem Vanam'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'Home | Suprem Vanam'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About | Suprem Vanam'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', {title: 'Projects | Suprem Vanam'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', {title: 'Services | Suprem Vanam'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {title: 'Contact | Suprem Vanam'});
});

app.listen(process.env.PORT || this.prototype, () => console.log(`Our web app is listening at http://localhost:${port}`));

module.exports = router;
