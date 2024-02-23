let box = document.querySelector(".box");
let curr="blue"
let btn= document.querySelector("#btn");
box.addEventListener('click',()=>{
    if (curr==="blue"){
        curr="red";
box.classList.add("red");
box.classList.remove("blue");
    }
    else{
        curr="blue";
        box.classList.add("blue");
     box.classList.remove("red");
    }
});