// Sum of all numbers in an array
//anonymous
var age=[4,5,36,56,44,55,23,22.16,17,18];
var ageSum = age.reduce((total,age)=>{
  return total+age;
},0);
console.log(ageSum);
//IIFE
const age=[4,5,36,56,44,55,23,22.16,17,18];
const ageSum = age.reduce((total,age)=>{
  return total+age;
},0);console.log(ageSum);
