
// C++: new allocates on heap (True).
// C: No new keyword; malloc is used for heap allocation (False).
// Python: No new; memory is always allocated on the heap (N/A).
// Java: new allocates on heap (True).
// JavaScript: new is for object creation, but heap/stack allocation is managed automatically (False for memory allocation).



let arr=[10,20,30,40,25,15,5,2,3];

// let ans=arr.reduce((acc,curr)=>{
    //  return acc+curr;
    // },0);
    // console.log(ans);


arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);

console.log(arr.indexOf(15));
console.log(arr.find(element => element === 20));


// for each loop 
arr.forEach((value,index)=>{
console.log(value,index);
});


// for in loop

for(let key in arr){
    console.log(key,arr[key]);
}

// for of loop

for(let val of arr){
    console.log(val);
}

