const prompt = require("prompt-sync")();
var num = parseInt(prompt("Enter the Number : "));
var result;
switch(num){
    case 1:
        result = "One";
        break;
    case 2:
        result = "Two";
        break;
    case 3:
        result = "Three";
        break;
    default:
        result = "Invalid Entry";
}

console.log(result);