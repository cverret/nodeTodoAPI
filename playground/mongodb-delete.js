// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo Server.')
  }
  console.log('Connect to Mongo server')
  const db = client.db('TodoApp')

  //deleteMany
  db.collection('Todos').deleteMany({text: 'Do Something'}).then((result) => {
    console.log(result)
  })

  client.close()
})