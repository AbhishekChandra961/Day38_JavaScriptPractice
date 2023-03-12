const prompt = require("prompt-sync")();
console.log("Think of a Number between 1 to 100");
let guess;
let min = 1;
let max = 100;

while (true) {
    // Ask user to think of a number between min and max
    guess = Math.floor((min + max) / 2);
    let response = prompt(`Is your number ${guess}? (yes, no, or exit)`);
  
    if (response === "yes") {
      alert("Great! Your number is "+guess);
      break;
    } else if (response === "exit") {
      break;
    } else if (response === "no") {
      response = prompt("Is your number less than "+guess+" (yes or no)");
  
      if (response === "yes") {
        max = guess - 1;
      } else if (response === "no") {
        min = guess + 1;
      }
    }
  }