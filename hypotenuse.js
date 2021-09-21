var firstSide=document.querySelector("#side1");
var secondSide=document.querySelector("#side2");
var calculateBtn=document.querySelector("#btn");
var errorMsg=document.querySelector("#err-msg");
var result=document.querySelector("#output");

function calculateHypotenuse(){
    if(firstSide.value && secondSide.value){
        hideMessage();
        var a=Number(firstSide.value);
        var b=Number(secondSide.value);
        var hypotenuseOfTriangle= Math.sqrt(a*a+b*b).toFixed(3);
        result.style.display="block";
        result.innerText=" Hypotenuse of the trianglr is "+hypotenuseOfTriangle+" units";
    
    }
    else{
        showMessage("Note: You have to fill all the fields and values in them must be greate than zero");
    }

      
}
calculateBtn.addEventListener("click", calculateHypotenuse);

function hideMessage(){
    errorMsg.style.display="none";
    result.style.display="none";

}

function showMessage(msg){
    errorMsg.style.display="block";
    errorMsg.innerText=msg;
    
    
    
}




