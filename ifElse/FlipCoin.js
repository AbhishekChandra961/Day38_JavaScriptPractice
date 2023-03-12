// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

const randomNum = Math.random();

if(randomNum<0.5){
    console.log("Head");
}else{
    console.log("Tails");
}