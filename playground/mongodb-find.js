// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo Server.')
  }
  console.log('Connect to Mongo server')
  const db = client.db('TodoApp')

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   if (err) {
  //     console.log('Unable to find Todos', err)
  //   }
  // })

  db.collection('Users').find({name: 'Chuck'}).toArray().then((docs) => {
    console.log('Users')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    if (err) {
      console.log('Unable to find Users', err)
    }
  })

  client.close()
})