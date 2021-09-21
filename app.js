var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var isTriangleBtn=document.querySelector("#btn");
var output=document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3){
    return Number(angle1)+Number(angle2)+Number(angle3)
}

function isTriangle(){
    if(angle1.value&&angle2.value&&angle3.value){
        var sumOfAngles=calculateSumOfAngles(angle1.value, angle2.value, angle3.value);
        if(sumOfAngles===180){
            output.innerText="oh YES Angles form a Triangle";
        }
        else{
            output.innerText="oh NO Angles won't form a Triangle";
        }
    }
    else{
        alert("Please fill all the values");
    }

}

isTriangleBtn.addEventListener("click", isTriangle);

