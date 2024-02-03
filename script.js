// program to find the average of the given numbers

let marks=[56,42,45,65,24,6];
let sum=0;
for(let i of marks){
    sum=sum+i;

}
console.log(sum);
let avg= sum/marks.length;
// String special template
console.log(`The average of the number is ${avg}`); 