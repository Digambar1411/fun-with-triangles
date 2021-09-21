var base= document.querySelector("#base");
var height= document.querySelector("#height");
var errorMsg= document.querySelector("#err-msg");
var areaBtn= document.querySelector("#area-btn");
var output= document.querySelector("#output");

console.log(base);
console.log(height);
console.log(errorMsg);

areaBtn.addEventListener("click", ()=> console.log("clicke"));
errorMsg.innerText="thhis is error msg";
output.innerText="output wil show here";