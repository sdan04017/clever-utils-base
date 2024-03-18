// clever-utils.js

const chalk = require('chalk');

// Function to generate a random hex color code
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Function to print a colorful message
function printColorfulMessage(message, color) {
  console.log(chalk.keyword(color)(message));
}

module.exports = {
  generateRandomColor,
  isPalindrome,
  printColorfulMessage
};
