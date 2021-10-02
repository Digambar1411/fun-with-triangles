var base= document.querySelector("#base");
var height= document.querySelector("#height");
var areaBtn= document.querySelector("#area-btn");
var output=document.querySelector("#output");
var errorMsg=document.querySelector("#err-msg");
areaBtn.addEventListener("click", calculateArea);

function calculateArea(){
    hideMessage();
    if(base.value!=0 && height.value!=0){
        var triangleBase=Number(base.value);
        var triangleHeight=Number(height.value);
        var areaOfTriangle=(triangleBase*triangleHeight)/2;
        output.style.display="block";
        output.innerText="Area of the triangle is "+areaOfTriangle +" units";

    }
    else{
        showMessage("Note: You have to enter all the fields and values must be greater than zero!");
    }
    

}

function hideMessage(){
    errorMsg.style.display="none";
    output.style.display="none";

}
function showMessage(msg){
    errorMsg.innerText=msg;
    errorMsg.style.display="block";
}




