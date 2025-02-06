
// function definition
// function Myname(){
//     console.log("Akash kumar");
// }

// // function call
// Myname();


// function count(){
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }

// count();


// function para(num){
//     console.log("Print Number ",num);
// }
// para(5);

// function average(num1,num2){
//   let avg=(num1+num2)/2;
//   console.log("Average: ",avg);
// }

// average(5,7);


// function return 

function threesum(a,b,c){
    let sum=a+b+c;
    return sum;
}

let val=threesum(1,2,3);
console.log(val);


// function getName(firstName,lastName){
//     let fullName=firstName + " " + lastName;
//     return fullName;
//     // unreachable statements
//     let a=10;
//     let b=15
//     let sum=a+b;
//     console.log(sum);
// }

// let name1=getName("Akash","kumar");
// console.log(name1);


function getval(firstName,lastName){
    let fullName=firstName + " " + lastName;
    return fullName;
    // unreachable statements
    let a=10;
    let b=15
    let sum=a+b;
    console.log(sum);
}

let val1=getval(7,7);
console.log(val1);

function getval12(firstName,lastName){
    let fullName=firstName  + lastName;
    return fullName;
    // unreachable statements
    let a=10;
    let b=15
    let sum=a+b;
    console.log(sum);
}

let val2=getval12(7,7);
console.log(val2);

