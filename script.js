//  program to check number and giving grades 

let score;
score =prompt("Enter Your Marks in range (0--100)");

if(score==null){
    alert("reload and Enter your number first ");
}
 else if( score <=100 && score>=80 ){
     alert("Congratulations Your Grade A");
     
}
 else if( score <=79 && score>=60 ){
    alert("Congratulations Your Grade B");

}
 else if( score <=69 && score>=50 ){
    alert("Congratulations Your Grade C");

}
else if( score <=59 && score>=40 ){
    alert("Congratulations Your Grade D");

}
else if( score <=49 && score>=34 ){
    alert("Congratulations Your Grade E ");

}
else if( score <=33 && score>=0 ){
    alert("Your grade is F, Next Time Better :) ");

}

else{
    alert("Reload and Enter Marks in Range");
}