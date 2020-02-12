var express = require('express');
var router = express.Router();
const { insert, update, getList, delByName } = require('../services/db')

router.post('/', async function (req, res, next) {
  let result = await insert(req.body.collection, req.body)
  let r = format(result.result.n, result.result)
  res.send(r)
});
router.put('/', async function (req, res, next) {
  let result = await update(req.body.collection, req.body)
  let r = format(result.result.n, result.result)
  res.send(r)
});
router.delete('/', async function (req, res, next) {
  let result = await delByName(req.body.collection, req.body.name)
  let r = format(result.result.n, result.result)
  res.send(r)
});
router.get('/:collection', async function (req, res, next) {
  let list = await getList(req.params.collection)
  let r = format(1, list)
  res.send(r)
});

function format(id, res) {
  return JSON.stringify({
    id,
    res
  })
}
module.exports = router;
