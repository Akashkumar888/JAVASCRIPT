
function h(){
    console.log("hello");
}


setTimeout(h,1*1000); // 1 sec 


setTimeout(function (){
    console.log("mello");
},4*1000);
