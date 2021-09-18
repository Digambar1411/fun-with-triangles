var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var isTriangleBtn=document.querySelector("#btn");
var output=document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3){
    return Number(angle1)+Number(angle2)+Number(angle3)
}

console.log(calculateSumOfAngles(23,45,80));
console.log(calculateSumOfAngles(65,45,70));


