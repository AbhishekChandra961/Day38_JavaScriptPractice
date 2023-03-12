// Write a program that takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.
const prompt = require("prompt-sync")();
var month = parseInt(prompt("Enter the month : "));
var day = parseInt(prompt("Enter the day : "));
var result = false;

        if(month==3 && day>=20 && day<=31){
            result = true;
        }
        if(month==6 && day<=20 && day>=1){
            result=true;
        }
        if(month==4 && day>=1 && day<=30){
            result=true;
        }
        if(month==5 && day>=1 && day<=31){
            result=true;
        }


console.log(result);
