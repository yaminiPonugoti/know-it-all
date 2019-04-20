const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});



server.listen(port, hostname, () => {
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
