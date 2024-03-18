var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json');
const db = low(adapter)

const shortid = require('shortid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/account', function(req, res, next) {
  let accounts = db.get('accounts').value();
  console.log(accounts)
  res.render('list', {accounts : accounts } );
});

router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', (req,res) => {

  let id = shortid.generate();

  console.log(req.body)
  db.get('accounts').push({ id: id, ...req.body }).write();
  res.render('success', {
    url: '/account'
  })
})

module.exports = router;
