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
//

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/login.html'));
});

app.get('/quiz',function(req,res){
  res.sendFile(path.join(__dirname+'/quiz.html'));
});

$(document).ready(function () {
	
  var questionNumber=0;
  var questionBank=new Array();
  var stage="#game1";
  var stage2=new Object;
  var questionLock=false;
  var numberOfQuestions;
  var score=0;
           
  
           
           
           
  
   
           $.getJSON('activity.json', function(data) {
  
          for(i=0;i<data.quizlist.length;i++){ 
              questionBank[i]=new Array;
              questionBank[i][0]=data.quizlist[i].question;
              questionBank[i][1]=data.quizlist[i].option1;
              questionBank[i][2]=data.quizlist[i].option2;
              questionBank[i][3]=data.quizlist[i].option3;
          }
           numberOfQuestions=questionBank.length; 
          
           
          displayQuestion();
          })//gtjson
   
   
  
  
  
  function displayQuestion(){
   var rnd=Math.random()*3;
  rnd=Math.ceil(rnd);
   var q1;
   var q2;
   var q3;
  
  if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];}
  if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];}
  if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}
  
  $(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div>');
  
   $('.option').click(function(){
    if(questionLock==false){questionLock=true;	
    //correct answer
    if(this.id==rnd){
     $(stage).append('<div class="feedback1">CORRECT</div>');
     score++;
     }
    //wrong answer	
    if(this.id!=rnd){
     $(stage).append('<div class="feedback2">WRONG</div>');
    }
    setTimeout(function(){changeQuestion()},1000);
   }})
  }//display question
  
      
      
      
      
      
      function changeQuestion(){
          
          questionNumber++;
      
      if(stage=="#game1"){stage2="#game1";stage="#game2";}
          else{stage2="#game2";stage="#game1";}
      
      if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
      
       $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
       $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
      }//change question
      
  
      
      
      function displayFinalSlide(){
          
          $(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
          
      }//display final slide
      
      
      
      
      
      
      
      });//doc ready

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

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
