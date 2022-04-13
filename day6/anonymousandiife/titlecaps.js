// Convert all the strings to title caps in a string array
// anonymous
var titleCase=function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  
  
  console.log(titleCase("I am learning javascript"));
// IIFE
var titleCase=function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');

  }(console.log(titleCase("I am learning javascript")));
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of the same size
// Remove duplicates from an array
// Rotate an array by k times