var express = require('express');
var router = express.Router();

router.all('/b/:id', function (req, res, next) {
  console.log('Accessing the secret section ...')
  if (req.params.id === '0') {
    next('route')
  } else {
    next()
  }
}, function (req, res, next) {
  console.log('2 ...')
  next()
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/b/:id', function (req, res, next) {
  console.log('3 ...')
  res.send(`/b/${req.params.id}`);
});

module.exports = router;
