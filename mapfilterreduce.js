

function twice(ele){
    return 2*ele;
}


function square(ele){
    return ele*ele;
}


let arr=[1,-6,-3,8];
console.log(arr);


let brr=arr.map(twice);
console.log(brr);


let crr=arr.map(square);
console.log(crr);


let drr=arr.map(function (ele){
    return ele+10;
})

console.log(drr);

