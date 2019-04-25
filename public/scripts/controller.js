$(document).ready(function () {
	
    var questionNumber=0;
    var questions=new Array();
    var stage="#game1";
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
             

     
$.getJSON('activity.json', function(data) {
    
    for(i=0;i<data.quizlist.length;i++){ 
            questions[i]=new Array;
            questions[i][0]=data.quizlist[i].question;
            questions[i][1]=data.quizlist[i].option1;
            questions[i][2]=data.quizlist[i].option2;
            questions[i][3]=data.quizlist[i].option3;
        }
            numberOfQuestions=questions.length; 
            
             
            displayQuestion();
            })//gtjson
     
     
    
    
    
  function displayQuestion(){
     var rnd=Math.random()*3;
    rnd=Math.ceil(rnd);
     var q1;
     var q2;
     var q3;
    
    if(rnd==1){q1=questions[questionNumber][1];q2=questions[questionNumber][2];q3=questions[questionNumber][3];}
    if(rnd==2){q2=questions[questionNumber][1];q3=questions[questionNumber][2];q1=questions[questionNumber][3];}
    if(rnd==3){q3=questions[questionNumber][1];q1=questions[questionNumber][2];q2=questions[questionNumber][3];}
    
    $(stage).append('<div class="questionText">'+questions[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div>');
    
     $('.option').click(function(){
      if(questionLock==false){questionLock=true;	
     
     
    //if correct answer
      if(this.id==rnd){
       $(stage).append('<div class="correct">CORRECT!</div>');
       score++;
       }
      //if wrong answer	
      if(this.id!=rnd){
       $(stage).append('<div class="wrong>WRONG!</div>');
      }
      setTimeout(function(){changeQuestion()},1000);
     }})
    }
    
     
        
        function changeQuestion(){
            
        questionNumber++;
        
        if(stage=="#game1"){stage2="#game1";stage="#game2";}
            else{stage2="#game2";stage="#game1";}
        
        if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
        
         $(stage2).animate({"left": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
         $(stage).animate({"left": "+=800px"},"slow", function() {questionLock=false;});
        }//change question
        
    
        
        
        function displayFinalSlide(){
            
            $(stage).append('<div class="questionText">You have finished the quiz!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
            
        }//display final slide
        
          
        
        });//doc ready