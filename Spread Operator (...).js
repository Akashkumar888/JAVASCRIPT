
// Spread in arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Spread in objects
let obj1 = { name: "Akash", age: 21 };
let obj2 = { ...obj1, city: "Bhagalpur" };
console.log(obj2); // { name: "Akash", age: 21, city: "Bhagalpur" }

// Spread in function calls
function sum(a, b, c) {
  return a + b + c;
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // 6


getData() is called.


