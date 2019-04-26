
const http = require('http');
//const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

//my code
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var user = require("./models/user.js");
app.use(express.static('public'));
//creating mongoose connection
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://admin1:knowitall@know-it-all-uob80.mongodb.net/test?retryWrites=true");
var bodyParser = require("body-parser");  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var nameSchema = new mongoose.Schema({
  username: String,
  password: String
 });

 var User = mongoose.model("User", nameSchema);


{/* <link rel="shortcut icon" href="./favicon.ico" />
<link rel="icon" href="./favicon.ico" /> */}

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

// app.get('/quiz',function(req,res){
//   res.sendFile(path.join(__dirname+'/quiz.html'));
// });

app.get('/signin',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});


app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/signup.html'));
});


/*app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

app.listen(port,() => {
	console.log(`Server running at port `+port);
	});



app.post("/signup", (req, res) => {
  let {username, password} = req.body;
  let userData = {
    username,
    password
  };
  var myData = new user(req.body);

  myData.save()
      .then(item => {
          res.sendFile(path.join(__dirname+'/quiz.html'));
      })
      .catch(err => {
          res.sendFile(path.join(__dirname+'/login.html'));
      });
});

app.post("/quit", (req, res) => {
  res.sendFile(path.join(__dirname+'/login.html'));
});

app.post("/signin",(req,res) =>{
  let{username,password} = req.body;
  user.findOne({username:username},'username password',(err,userData)=>{
    if(!err){
      if(userData == null){
        res.sendFile(path.join(__dirname+'/login.html'));
        return;
      }
      // console.log(userData.password);
      if(password === userData.password){
        res.sendFile(path.join(__dirname+'/quiz.html'));
      }
      else{
       // res.sendFile(path.join(__dirname+'/login.html'));
        //alert("Incorrect Password!");
        res.sendFile(path.join(__dirname+'/login.html'));
        // res.status(401).send(password+'incorrect password');
      }
    }
    else{
      res.status(401).send('invalid login information')
    }
    });
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




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://admin1:knowitall@know-it-all-uob80.mongodb.net/test?retryWrites=true";
// MongoClient.connect(url, {useNewUrlParser: true},function(err,db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });



/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin1:knowit@ll1@know-it-all-uob80.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(err => {
const collection = client.db("test").collection("devices");
// perform actions on the collection object
client.close();


}*/
