
let arr=[10,20,30,40,50];

function getsum(arr){
  let len=arr.length;
  let sum=0;
  for(let i=0;i<len;i++){
    sum+=arr[i];
  }
  return sum;
};

let totalsum=getsum(arr);
console.log(totalsum);