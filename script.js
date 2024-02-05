let n= prompt("Enter a number");
let arr=[];
for(let i =1; i<=n ;i++){
     arr[i-1]=i;
  
}
// reduce method use to take multiple input and generate single output like this

let sum=arr.reduce((prev ,curr)=>{
    return prev+curr;
})
let product=arr.reduce((prev,curr)=>{
    return prev*curr;
})
console.log(arr);
console.log(sum);
console.log(product);