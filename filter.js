// even element 
function fun(ele){
    if(ele%2!=0)return true;
    else return false;
}

// filter always filtering true and false 

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr);

let brr=arr.filter(fun);
console.log(brr);

let crr=arr.filter(function (ele){
    if(ele%2==0)return true;
    else return false;
});
console.log(crr);

let drr=arr.filter(ele=> (ele<5));
console.log(drr);