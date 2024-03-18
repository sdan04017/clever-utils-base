# Clever Utils

**Clever Utils** is a Node.js module providing a collection of clever utility functions for various purposes.

## Installation

You can install this module via npm: `npm install clever-utils`

## Usage
```javascript
const cleverUtils = require('clever-utils');

// Generate a random hex color code
console.log('Random Color:', cleverUtils.generateRandomColor());

// Check if a string is a palindrome
const str = 'racecar';
console.log(`${str} is a palindrome:`, cleverUtils.isPalindrome(str));

// Print a colorful message
cleverUtils.printColorfulMessage('Hello, world!', 'orange');

```
