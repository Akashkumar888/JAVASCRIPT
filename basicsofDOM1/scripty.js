
// let x = document.querySelector("h2");

// setTimeout(function(){
//     x.style.fontFamily = '"Gill Sans", sans-serif';
//     x.style.color = "red";
// }, 4 * 1000);

// let y = document.querySelector("h1");

// setTimeout(function(){
//     y.innerHTML = "Changed";
// }, 3 * 1000);



// let x=document.querySelector("#ele1");

// x.style.color="yellow";
// x.style.backgroundColor="red";


let x=document.getElementById("ele1"); // pikachu
x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
});

x.addEventListener("mouseleave",function(){
    x.style.color="black";
    x.style.backgroundColor="white";
});

let y=document.getElementById("ele2"); // charizard
y.addEventListener("mouseenter",function(){
y.style.color="white";
y.style.backgroundColor="orange";
});

y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.backgroundColor="white";
});

let z=document.getElementById("ele3"); // mewtwo
y.addEventListener("click",function(){
z.style.color="white";
z.style.backgroundColor="purple";
});


z.addEventListener("click",function(){
x.style.color="white";
x.style.backgroundColor="green";
x.innerHTML="Bulbasaur";
});

