const gitpull = require('../services/gitpull')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/aaa', function (req, res, next) {
  gitpull((out,err)=>{
    res.send(`${out} err:${err}`);
  })
  // res.render('index', { title: 'Express' });
});

module.exports = router;
