var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var isTriangleBtn=document.querySelector("#btn");
var errorMsg=document.querySelector("#err-msg");
var output=document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3){
    return Number(angle1)+Number(angle2)+Number(angle3)
}

function isTriangle(){
    errorMsg.style.display="none";
    output.style.display="none";
    if(angle1.value && angle2.value  && angle3.value){
        if(angle1.value >0 && angle2.value>0 && angle3.value>0){
    
            var sumOfAngles=calculateSumOfAngles(angle1.value, angle2.value, angle3.value);
            if(sumOfAngles===180){
                output.style.display="block";
                output.innerText="Oh YES !! Angles form a Triangle";
            }
            else{
                output.style.display="block";
                output.innerText="Oh NO!! Angles won't form a Triangle";
            }
        }
        else{
            errorMsg.style.display="block";
            errorMsg.innerText="Alert : Angle entered must be greater than zero";
        }
    }    
    else{
        errorMsg.style.display="block";
        errorMsg.innerText="Alert : You must enter all the values";

    }    

}

isTriangleBtn.addEventListener("click", isTriangle);

