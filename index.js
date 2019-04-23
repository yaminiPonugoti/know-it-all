var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb:://127.0.0.1:5000/';

router.get('/', function(req, res, next){
   res.render('index');
});

router.get('/get-data', function(req, res, next){

});

router.get('/insert', function(req, res, next){

});

router.get('/update', function(req, res, next){

});
router.get('/delete', function(req, res, next){

});

module.exports = router;