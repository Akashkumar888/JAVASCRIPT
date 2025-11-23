
// ⭐ 29. Difference Between slice() and splice()
// ✔ slice()
// Does NOT modify original array
// Returns a new array
// Used for extracting part of array

let arr = [1,2,3,4];
console.log(arr.slice(1,3)); // [2,3]

// ✔ splice()
// Modifies original array
// Used for add/remove elements

let arr = [1,2,3,4];
arr.splice(1,2); 
console.log(arr); // [1,4]

// ⭐ Summary
// slice → copy
// splice → modify