var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/account', function(req, res, next) {
  res.render('list');
});

router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', (req,res) => {
  console.log(req.body)
  res.send('Account send')
})

module.exports = router;
