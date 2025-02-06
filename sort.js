
let arr=[3,6,1,2,3,9,4,7,5,8];
console.log(arr);

arr.sort();
console.log(arr);

let brr=arr.sort(function(a,b){
return b-a;
});
console.log(brr);
