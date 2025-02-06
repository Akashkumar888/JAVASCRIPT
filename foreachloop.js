
brr=[1,4,6,0,2,7,9,8];

// brr.forEach((ele,i,arr) => {
//     console.log(ele,i,arr);
// });

brr.forEach((ele,i) => {
    console.log(ele,i);
});

console.log(brr);
brr.forEach((ele,i) => {
    //console.log(ele,i);
   ele*=2;
});
console.log(brr);

// foreach loop
Array.from(brr).forEach((ele,i) => {
    console.log(ele,i);
});