
let s1=document.getElementById("sq1");
let s2=document.getElementById("sq2");
let s3=document.getElementById("sq3");
let s4=document.getElementById("sq4");

s1.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r}</h1>`;
});

s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>${1}</h1>`;
});

s1.addEventListener("dblclick",function(){
let r=Math.floor(Math.random()*256);
let g=Math.floor(Math.random()*256);
let b=Math.floor(Math.random()*256);
s1.style.backgroundColor=`rgb(${r},${g},${b})`;
});

s1.addEventListener("mouseleave",function(){
s1.style.backgroundColor=`white`;
 });
    

let clr="red";
s2.addEventListener("mouseenter",function(){
   if(clr=="red"){
    s2.style.backgroundColor="red";
    clr="green";
   }
   else if(clr=="green") {
    s2.style.backgroundColor="green";
    clr="blue";
   }
   else{
    s2.style.backgroundColor="blue";
    clr="red"
   }
   });
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
});

s3.addEventListener("mouseenter",function(){
let r=Math.floor(Math.random()*256);
let g=Math.floor(Math.random()*256);
let b=Math.floor(Math.random()*256);
s3.style.backgroundColor=`rgb(${r},${g},${b})`;
});

s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";
});

s4.addEventListener("click",function(){
let r=Math.floor(Math.random()*256);
let g=Math.floor(Math.random()*256);
let b=Math.floor(Math.random()*256);
s1.style.backgroundColor=`rgb(${r},${g},${b})`;
s2.style.backgroundColor=`rgb(${g},${b},${r})`;
s3.style.backgroundColor=`rgb(${b},${r},${g})`;
});

s4.addEventListener("mouseleave",function(){
s1.style.backgroundColor="white";
s2.style.backgroundColor="white";
s3.style.backgroundColor="white";    
});


let crsr=document.getElementById("cursor");
let main=document.getElementById("main");

main.addEventListener("mousemove",function(dets){
console.log(dets.clientX,dets.clientY);
crsr.style.left=dets.clientX + "px";
crsr.style.top=dets.clientY + "px";
});
