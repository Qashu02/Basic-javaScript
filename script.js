//  creating div and accessing it through js 

let box= document.body.querySelectorAll("div");

let idx=1;
for( let el  of box){
el.innerText= el.innerText+` unique val is ${idx}`;
idx++;
}
