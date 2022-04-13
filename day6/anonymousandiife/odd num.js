// 1)Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
//anonymousfunction
var odd = [1,2,3,4,5,6,7,8,9,10];
var oddnum =function(){for (num in odd)
{
  if(num%2 == 1){
    console.log(num);
  };
  
};
}
oddnum(odd);
// IIFE
var odd = [1,2,3,4,5,6,7,8,9,10];
var oddnum = function(){
  for (num in odd)
{
  if(num%2 == 1){
    console.log(num);
  };
  
};
}(odd);
