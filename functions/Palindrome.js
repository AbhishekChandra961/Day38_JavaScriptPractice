const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter the Number : "));

function isPalindrome(num) {
    // Convert the number to a string
    const numString = num.toString();
  
    // Check if the string is the same forwards and backwards
    return numString === numString.split('').reverse().join('');
  }
  
  console.log(isPalindrome(num));
  
  