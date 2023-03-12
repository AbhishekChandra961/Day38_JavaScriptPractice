// Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.

const prompt = require("prompt-sync")();
var year = parseInt(prompt("Enter the year : "));
var result=false;

if(year>=1000 && year<=9999){
    if(year%4==0){
        result = true;
    }
}

if(result){
    console.log("Leap Year");
}else{
    console.log("Not Leap Year");
}
