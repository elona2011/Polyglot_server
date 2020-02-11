var express = require('express');
var router = express.Router();
const { insert, update, getList, delByName } = require('../services/db')

router.post('/', async function (req, res, next) {
  let result = await insert(req.body.collection, req.body)
  res.send(JSON.stringify(result.result))
});
router.put('/', async function (req, res, next) {
  let result = await update(req.body.collection, req.body)
  res.send(JSON.stringify(result.result))
});
router.delete('/', async function (req, res, next) {
  let result = await delByName(req.body.collection, req.body.name)
  res.send(JSON.stringify(result.result))
});
router.get('/:collection', async function (req, res, next) {
  let list = await getList(req.params.collection)
  res.send(JSON.stringify(list))
});

module.exports = router;
