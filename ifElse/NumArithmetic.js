// Enter 3 Numbers do following arithmetic operation and find the one that
// is maximum and minimum
// 1. a + b * c       3. c + a / b
// 2. a % b + c       4. a * b + c

const prompt = require("prompt-sync")();
var n1 = parseInt(prompt("Enter First Number : "));
var n2 = parseInt(prompt("Enter Secont Number : "));
var n3 = parseInt(prompt("Enter Third Number : "));

if(n1>n2 && n1>n3){
    console.log("First Number is Maximum");
}else if(n2>n1 && n2>n3){
    console.log("Second Number is Maximum");
}else if(n3>n1 && n3>n2){
    console.log("Third Number is Maximum");
}

if(n1<n2 && n1<n3){
    console.log("First Number is Minimum");
}else if(n2<n1 && n2<n3){
    console.log("Second Number is Minimum");
}else if(n3<n1 && n3<n2){
    console.log("Third Number is Minimum");
}