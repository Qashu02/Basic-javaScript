let arr= ["bloomberg", "google", "microsoft","oracle", "GPT"]
// arr.shift for deleted first element 
// unshift() for adding new element on first index 


console.log("orignal", arr);
let deleted= arr.shift(0);
console.log ("deleted " , deleted);

// replace add or remove we user splice()

let replace= arr.splice(2,1,"uber");
console.log("replace" ,arr);

// push and pop used for adding and deleting elements from start 

arr.push("java");
// toString used for converting the array in Strings 
console.log("Extended array:",  arr.toString());
