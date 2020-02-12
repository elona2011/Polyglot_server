const { url, dbName } = require('../config').db
var MongoClient = require('mongodb').MongoClient

let db = null
MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err, client) {
  if (err) throw err

  db = client.db(dbName)

  // var db = client.db('animals')

  // db.collection('mammals').find().toArray(function (err, result) {
  //   if (err) throw err

  //   console.log(result)
  // })
})

module.exports = {
  insert(collectionName, value) {
    return new Promise((res, rej) => {
      db.collection(collectionName).insertOne(value, (err, result) => {
        if (err) throw err
        res(result)
      })
    })
  },
  update(collectionName, value) {
    return new Promise((res, rej) => {
      let name = value.name
      delete value._id
      delete value.name

      db.collection(collectionName).updateOne({ name }, { $set: value }, (err, result) => {
        if (err) throw err
        res(result)
      })
    })
  },
  getList(collectionName) {
    return new Promise((res, rej) => {
      db.collection(collectionName).find({}).toArray((err, docs) => {
        if (err) throw err
        res(docs)
      })
    })
  },
  delByName(collectionName, name) {
    return new Promise((res, rej) => {
      db.collection(collectionName).deleteOne({ name }, (err, result) => {
        if (err) throw err
        res(result)
      })
    })
  }
}