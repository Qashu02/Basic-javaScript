//  Taking user input and checking number is multiple of 5 ?


// alert("hello");is only used for displaying message

// prompt used for taking input from user


let num=prompt("Enter a number");

if(num === null) 
{
   alert("Please Reload and Enter a number ");
}

// === is used for restriction that variable only complare with same data type
else if (num%5===0){
   alert ("Your number is multiple of 5");

}
else{
   alert( "Your number is not multiple of 5");
}