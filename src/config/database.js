//const mongoose = require("mongoose");


//module.exports = {
//	'url': 'mongodb://localhost/login-node'

 
//};

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://dannymedinacoronel:<A1g9g50/*>@cluster0-shard-00-00.4dcl9.mongodb.net:27017,cluster0-shard-00-01.4dcl9.mongodb.net:27017,cluster0-shard-00-02.4dcl9.mongodb.net:27017/?ssl=true&replicaSet=atlas-jr6zu6-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



// module.exports = {
//	'url': 'mongodb-srv://dannymedinacoronel:<A1g9g50/*>@cluster0.4dcl9.mongodb.net:27017/login-node'


//};

//mongoose.connect('mongodb://dannymedinacoronel:A1g9g50/*@cluster0.4dcl9.mongodb.net/login-node')



//module.exports = {
//	'url': 'mongodb//dannymedinacoronel:A1g9g50%2F%2a@cluster0.4dcl9.mongodb.net/login-node/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=true'

//};