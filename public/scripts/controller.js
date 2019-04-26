$(document).ready(function () {
	
    var questionNumber=0;
    var questionBank=new Array();
    var stage="#game1";
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
    var numbers = new Array;
    var file;
    
 
   /* var button = document.createElement("button");
    button.innerHTML = "Random";
    
    // 2. Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    
    // 3. Add event handler
    button.addEventListener ("click", myFunction());


    var button2 = document.createElement("button");
    button2.innerHTML = "Random";
    
    // 2. Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button2);
    
    // 3. Add event handler
    button.addEventListener ("click", myFunction2());

*/


   /* $(stage).append('<button class = "button" onclick="myFunction()">Random</button>');
    $(stage).append('<button class = "button" onclick="myFunction2()">Math</button>');
*/

    /*function myFunction() {
        $.getJSON('activity.json', function(data) {
            var min=0; 
            var max=data.quizlist.length;
            var range = data.quizlist.length;
            

        for(i=0;i<10;i++){ 
            var flag = 1;
            
           while (flag) {
                var random =Math.floor(Math.random() * (+max - +min)) + +min; 
                if (!numbers.includes(random)) {
                    numbers.push(random);
                    flag =0;
                }
           }

            questionBank[i]=new Array;
            questionBank[i][0]=data.quizlist[random].question;
            questionBank[i][1]=data.quizlist[random].option1;
            questionBank[i][2]=data.quizlist[random].option2;
            questionBank[i][3]=data.quizlist[random].option3;
        }
         numberOfQuestions=questionBank.length; 
        
         
        displayQuestion();
        })//gtjson


        
        
      }
      
      function myFunction2() {
        $.getJSON('activity2.json', function(data) {
            var min=0; 
            var max=data.quizlist.length;
            var range = data.quizlist.length;
            

        for(i=0;i<10;i++){ 
            var flag = 1;
            
           while (flag) {
                var random =Math.floor(Math.random() * (+max - +min)) + +min; 
                if (!numbers.includes(random)) {
                    numbers.push(random);
                    flag =0;
                }
           }

            questionBank[i]=new Array;
            questionBank[i][0]=data.quizlist[random].question;
            questionBank[i][1]=data.quizlist[random].option1;
            questionBank[i][2]=data.quizlist[random].option2;
            questionBank[i][3]=data.quizlist[random].option3;
        }
         numberOfQuestions=questionBank.length; 
        
         
        displayQuestion();
        })//gtjson
      }


     */
            $.getJSON('activity.json', function(data) {
                var min=0; 
                var max=data.quizlist.length;
                var range = data.quizlist.length;
                

            for(i=0;i<10;i++){ 
                var flag = 1;
                
               while (flag) {
                    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
                    if (!numbers.includes(random)) {
                        numbers.push(random);
                        flag =0;
                    }
               }

                questionBank[i]=new Array;
                questionBank[i][0]=data.quizlist[random].question;
                questionBank[i][1]=data.quizlist[random].option1;
                questionBank[i][2]=data.quizlist[random].option2;
                questionBank[i][3]=data.quizlist[random].option3;
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
       $(stage).append('<div class="correct">CORRECT</div>');
       score++;
       }
      //wrong answer	
      if(this.id!=rnd){
       $(stage).append('<div class="wrong">WRONG</div>');
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