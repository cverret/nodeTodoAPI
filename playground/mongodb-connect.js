const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to Mongo Server.')
  }
  console.log('Connect to Mongo server')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Do something',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insertOne({
    name: 'Chuck',
    age: 45,
    location: 'Austin'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  client.close()
})