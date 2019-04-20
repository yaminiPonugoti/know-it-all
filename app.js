const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static('public'));


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});



app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://khushi:khushi@be-better-together-wmrbk.mongodb.net/test?retryWrites=true";
MongoClient.connect(url, {useNewUrlParser: true},function(err,db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
}

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin1:knowit@ll1@know-it-all-uob80.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(err => {
const collection = client.db("test").collection("devices");
// perform actions on the collection object
client.close();


}*/);
