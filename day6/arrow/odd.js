//3) Do the below programs in arrow functions
// Print odd numbers in an array
// arrow function:
var odd = [1,2,3,4,5,6,7,8,9,10];
var oddnum =()=>{for (num in odd)
{
  if(num%2 == 1){
    console.log(num);
  };
  
};
}
oddnum(odd);
