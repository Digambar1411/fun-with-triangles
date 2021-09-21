var firstSide=document.querySelector("#side1");
var secondSide=document.querySelector("#side2");
var calculateBtn=document.querySelector("#btn");
var result=document.querySelector("#output");

function calculateHypotenuse(){
    
    var a=Number(firstSide.value);
    var b=Number(secondSide.value);
    var hypotenuseOfTriangle= Math.sqrt(a*a+b*b).toFixed(3);
    result.innerText=" Hypotenuse Of the triangle is "+hypotenuseOfTriangle+" units";

      
}
calculateBtn.addEventListener("click", calculateHypotenuse);




