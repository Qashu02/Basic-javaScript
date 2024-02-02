let num="23";
let usernum=prompt("Guess the number");

for (let i of usernum){
    if (num!=usernum){
        usernum=prompt("Try again ");
    
    }
}
console.log("congratulations you find the numvber");