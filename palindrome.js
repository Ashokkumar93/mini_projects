// Program that checks if an input string is a palindrome
// To execute: node palindrome.js {{string}}

var input = process.argv[2];

console.log(palindrome(input));

function palindrome (str) {
    return (str.toLowerCase() == str.toLowerCase().split("").reverse().join(""));
}