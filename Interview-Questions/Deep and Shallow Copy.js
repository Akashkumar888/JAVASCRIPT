
// ⭐ 55. Difference Between Deep and Shallow Copy
// ✔ Shallow Copy
// Copies only first level, nested objects are referenced, not copied.

const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };

shallow.b.c = 99;
console.log(obj.b.c); // 99 (affected)

// ✔ Deep Copy
// Copies all levels → nested objects are fully cloned, independent.

const deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 100;
console.log(obj.b.c); // 2 (NOT affected)

// ⭐ Interview Summary
// Shallow copy → top-level clone
// Deep copy → full clone including nested structures