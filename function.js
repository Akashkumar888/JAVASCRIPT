
// let greet=function (){
//     console.log("Good Morning");
// }

// greet();


function grretMe(greet,fullname){
    console.log("Good Morning",fullname);
    greet();
}

function greet(){
    console.log("Good morning");
}

grretMe(greet,"Akash");


function solve(num){
    return function(num){
        return num*num;
    }
}

let ans=solve(5);

let finalans=ans(10);

console.log(finalans);


const arr=[
function (a,b){
    return a+b;
},
function (a,b){
    return a-b;
},
function (a,b){
    return a*b;
},
function (a,b){
    return a/b;
}
];

let first=arr[0];
let sum=first(10,2);
console.log(sum);

let second=arr[1];
let sub=second(10,2);
console.log(sub);

let third=arr[2];
let mul=third(10,2);
console.log(mul);

let forth=arr[3];
let div=forth(10,2);
console.log(div);

let obj={
    age:21,
    "name":"akash",
    "height":" 5 feet 8 inch",
    Hello: ()=>{
     console.log("Hello World");
    }
}

obj.Hello();



{
    var height=14;
}

console.log(height);
