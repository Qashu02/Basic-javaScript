
// program that takes str as input and give number of vowel as an output .
const countVowels=(str)=>{
    let count=0;
for ( const char of str)
{
    if (char==="a"|| char==="e" || char==="i"|| char==="o"|| char==="u"){
        count++;
    }
}
// reutrn when the function will call
return count;

}