// program that takes array and print its square 
let arr=[1,42,2,3];
// call back function are the function when we use function as a parameter or reutrn a new function 
arr.forEach((val)=>{
   let sqr=val*val;
   console.log(`The suqare of ${val} is ${sqr}`);
});
