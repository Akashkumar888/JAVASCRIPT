
// ⭐ 52. What is a Symbol?
// Symbol is a primitive data type that creates unique, immutable values.
// Even if two symbols have the same description — they are NOT equal.

// ✔ Example:
const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 === s2); // false

// ⭐ Uses:
// To create unique object keys
// To avoid naming conflicts
// To make hidden properties

// ✔ Example:
const user = {};
const id = Symbol("id");

user[id] = 101;
console.log(user[id]); // 101