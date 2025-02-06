
let arr=[-3,6,-1,2,9,-4,-7,5,8];
console.log(arr);

arr.sort();
console.log(arr); // galat sort deta hai 

let brr=arr.sort(function(a,b){ // actual sort 
return a-b;
});

console.log(brr);

// sign
let crr=arr.sort(function(a,b){ // actual sort 
    return Math.abs(a)-Math.abs(b);
});
console.log(crr);

