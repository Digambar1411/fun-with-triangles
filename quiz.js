var quizForm= document.querySelector("#quiz-form");
var errorMsg= document.querySelector("#err-msg");
var output= document.querySelector("#out-div");
var submitBtn=document.querySelector("#submit-btn");


var answers=["Yes","Yes","No","Yes","Isosceles","30","Yes","Both","5cm","Scalene"]

function checkScore(){
    var score=0;
    var index=0;

    var formResult = new FormData(quizForm);
    for(var entry of formResult.entries()){
        console.log(entry);

    }
    for( var value of formResult.values()){
        console.log(value);
    }
}    

submitBtn.addEventListener("click", checkScore);


