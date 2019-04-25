var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb:://127.0.0.1:5000/';

router.get('/', function(req, res, next){
   res.render('index');
});

router.get('/get-data', function(req, res, next){
   var resultArray = [];
   mongo.connect(url,function(err,db){
      assert.equal(null,err);
      var cursor = db.collection('user-info').find();
      cursor.forEach(function(doc,err){
         assert.equal(null,err);//not sure about this line assert.(null,err)
         resultArray.push(doc);
      }, function(){
         db.close();
         res.render('index',{items: resultArray});
      });
   });
});

router.get('/signup', function(req, res, next){
   var item = {
      username: req.body.username,
      password: req.body.password
   };

   mongo.connect(url, function(err,db){
      assert.equal(null,err);
      db.collection('user-info').insertOne(item,function(err,result){
         assert.equal(null,error);
         console.log('User info inserted');
         db.close();
      });
   });
   res.redirect('/');

});

router.get('/update', function(req, res, next){

});
router.get('/delete', function(req, res, next){

});

module.exports = router;