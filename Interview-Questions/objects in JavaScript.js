
// ⭐ 65. How do you compare objects in JavaScript?
// Objects are compared by reference, not value.

// ✔ Example:
const a = { x: 1 };
const b = { x: 1 };

console.log(a === b); // false (different references)

// ⭐ Deep comparison:
function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(isEqual(a, b)); // true


// ⚠️ JSON method fails for:
// undefined
// functions
// different key order
// ⭐ Interview Answer
// JavaScript compares objects by reference. For value comparison, deep comparison is required.