var quizForm= document.querySelector("#quiz-form");
var errorMsg= document.querySelector("#err-msg");
var output= document.querySelector("#output");
var submitBtn=document.querySelector("#submit-btn");


var answers=["Yes","Yes","No","Yes","Isosceles","30","Yes","Both","5cm","Scalene"]

function checkScore(){
    var score=0;
    var index=0;
    var formResult = new FormData(quizForm);
    for( var value of formResult.values()){
        if(value===answers[index]){
            score+=1;
        }
        index+=1;
    
    }
    output.innerText="Your score is "+score;
}    
submitBtn.addEventListener("click", checkScore);


