const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter the Number : "));
let isPrime = true;
if(num==1){
    isPrime = false;
}else if(num>1){
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrime = false;
            break;
        }
    }
}

if(isPrime){
    console.log(num+" is a prime number");
}else{
    console.log(num+" is not a prime number")
}