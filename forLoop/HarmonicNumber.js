const prompt = require("prompt-sync")();
var n = parseInt(prompt("Enter the Number : "));
var sum=0;
for(var i=1;i<=n;i++){
    sum = sum + 1/i;
}
console.log(sum);