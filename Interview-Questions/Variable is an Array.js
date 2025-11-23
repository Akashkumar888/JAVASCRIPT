
// ⭐ 58. How to Check if a Variable is an Array?
// ✔ 1. Best method:
Array.isArray(arr);

// ✔ 2. Using instance:
// arr instanceof Array;

// ✔ 3. Checking constructor:
arr.constructor === Array;

// ⭐ Interview Answer
// The safest method is Array.isArray(value).