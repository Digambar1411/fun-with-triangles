var base= document.querySelector("#base");
var height= document.querySelector("#height");
var errorMsg= document.querySelector("#err-msg");
var areaBtn= document.querySelector("#area-btn");
var output=document.querySelector("#output");

// console.log(base);
// console.log(height);
// console.log(errorMsg);
// console.log(output);

areaBtn.addEventListener("click", calculateArea);

function calculateArea(){
    
    if(base.value && height.value){
        var triangleBase=Number(base.value);
        var triangleHeight=Number(height.value);
        var areaOfTriangle=(triangleBase*triangleHeight)/2;
        output.innerText="Area of the triangle is "+areaOfTriangle +" units";

    }
    

}




