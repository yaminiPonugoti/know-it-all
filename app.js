
const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;
var bodyParser = require("body-parser");  

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
// var User = require('/user');
app.use(express.static('public'));
<link rel="shortcut icon" href="./favicon.ico" />
<link rel="icon" href="./favicon.ico" />

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

app.get('/quiz',function(req,res){
  res.sendFile(path.join(__dirname+'/quiz.html'));
});

app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/signup.html'));
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//creating the schema
// var mongoose = require('mongoose');
// var UserSchema = new mongoose.Schema({
//  /* email: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true
//   }, */
//   username: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true,
//   }
// });
// var User = mongoose.model('User', UserSchema);
// module.exports = User;


// //inserting data into MongoDb
// if (req.body.username &&
//   req.body.password &&
//   req.body.passwordConf) {
//   var userData = {
//    /* email: req.body.email, */
//     username: req.body.username,
//     password: req.body.password,
//   }
//   //use schema.create to insert data into the db
//   User.create(userData, function (err, user) {
//     if (err) {
//       return next(err)
//     } else {
//       return res.redirect('/profile');
//     }
//   });
// }




var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin1:knowitall@know-it-all-uob80.mongodb.net/test?retryWrites=true";
MongoClient.connect(url, {useNewUrlParser: true},function(err,db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});



/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin1:knowit@ll1@know-it-all-uob80.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(err => {
const collection = client.db("test").collection("devices");
// perform actions on the collection object
client.close();


}*/
