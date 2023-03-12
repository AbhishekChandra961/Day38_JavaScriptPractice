const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter the Number : "));
var factorial=1;
for(var i=1;i<=num;i++){
    factorial=factorial*i;
}
console.log("factorial of "+num+" is "+factorial);