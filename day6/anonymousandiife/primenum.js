// Return all the prime numbers in an array
// anonymous
var num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var result = [];
var isPrime =function (num){
  if(num<2){
    return false;
    }
    for(i=2;i<num;i++){
      if(i%num==0){
        return false;
      }
    }
    return true;
}

num.forEach(function(element){
  const item = isPrime(element);
  if(item){
    result.push(element);
  }
});
console.log(result);

//IIFE
let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];
let isPrime =function (num){
  if(num<2){
    return false;
    }
    for(i=2;i<num;i++){
      if(i%num==0){
        return false;
      }
    }
    return true;
}

num.forEach(function(element){
  const item = isPrime(element);
  if(item){
    result.push(element);
  }
});console.log(result);



