
// ⭐ 80. How to Flatten an Array?
// ✔ 1. Using flat()
const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1,2,3]

// ✔ 2. Infinite depth:
// arr.flat(Infinity);

// ✔ 3. Using reduce()
const flat = arr =>
  arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flat(val)) : acc.concat(val),
  []);

// ✔ 4. Using spread & recursion
const flatten = (arr) =>
  arr.some(Array.isArray)
    ? flatten([].concat(...arr))
    : arr;

// ⭐ Interview Answer
// Use arr.flat(Infinity) for simple flattening or recursion with .reduce() for custom control.