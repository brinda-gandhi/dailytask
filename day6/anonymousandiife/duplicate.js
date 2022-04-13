// Remove duplicates from an array
// anonymous
var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];
  
 var removeDuplicates =   function (arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
  
    console.log(removeDuplicates(arr));

// IIFE
var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];
  
    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
  
    console.log(removeDuplicates(arr));
