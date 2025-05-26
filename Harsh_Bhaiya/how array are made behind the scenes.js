// In JavaScript, arrays are objects internally.
// Internally, arrays use numeric keys like objects

var arr=[1,2,3,4,5,6];
console.log(typeof(arr));

// it convert in to object like that
var obj={
  0:1,
  1:2,
  2:3,
  3:4,
  4:5,
  5:6
};

arr[-5]=20;

arr[-10]=10;

console.log(arr);
console.log(obj);

console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
