
var arr=[1,2,3,4,5,6,7,8,9];

// anonymous fucntion 
arr.forEach(function(value){
  console.log(value*2);
});

// arrow function 
arr.forEach((value)=>{
  console.log(value+10);
});

// 📌 Copying Arrays Using map()
// If you want to make a simple shallow copy of an array:

var copy = arr.map((val) => val); // ✅ using map
console.log(copy); // exact copy of arr
// OR

var copy = [...arr];          // ✅ using spread operator

console.log(copy);

