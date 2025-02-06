
// let arr=[1,2,3,4,5,6];
// console.log(typeof(arr));
// console.log(arr);

let brr=new Array("Akash",12,true,'a',3.1416);
console.log(brr);
brr.push("kumar");
console.log(brr);
brr.pop();
console.log(brr);
brr.unshift(14); // add first index 
console.log(brr);
brr.shift();     // remove first index
console.log(brr);

console.log(brr.slice(2,4));

brr.splice(2,0,"kunal");
// brr.splice(2,2,"kunal");
console.log(brr);

let brr1=[10,20,30,11,21,44,51];

brr1.map((number,index) => {
    console.log(number,index);

})


let ans=brr1.map((number)=>{
return number*number;
});
console.log(ans);

let anseven=brr1.filter((number)=>{
if(number%2==0)return true;
else return false;
});

console.log(anseven);

let brr2=[1,2,'love','kunal',null];

let ansbrr2=brr2.filter((value)=>{
if(typeof(value)=='string')return true;
else return false;
});

console.log(ansbrr2);

