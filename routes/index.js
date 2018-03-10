var express = require('express');
var router = express.Router();
var config = require('../config');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Video App',
  });
});


router.get('/clip', function(req, res, next) {
  res.render('clip', {
    title: 'Dunkirk',
    p: 'In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk. Under air and ground cover from British and French forces, troops were slowly and methodically evacuated from the beach using every serviceable naval and civilian vessel that could be found. At the end of this heroic mission, 330,000 French, British, Belgian and Dutch soldiers were safely evacuated.',
  });
});


module.exports = router;
