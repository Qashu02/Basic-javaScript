// accessing h2 html element using java script 

//  tagName used to access the element name
// innerText : used for changing and accessing the pure text from html 
// innerHtml : used for accesing and adding the html element
// textContent : used for accessing the hidden text 
let heading=document.body.querySelector("h2");
// for properties 
console.dir(heading);   
console.log(heading);
heading.innerText= heading.innerText +" from apna college";