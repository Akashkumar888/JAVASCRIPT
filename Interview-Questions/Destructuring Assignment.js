
// ⭐ 70. What is Destructuring Assignment?
// Destructuring allows extracting values from arrays or objects easily.

// ✔ Array Destructuring
const arr = [10, 20, 30];
const [a, b] = arr;

console.log(a, b); // 10 20

// ✔ Object Destructuring
const user = { name: "Akash", age: 21 };
const { name, age } = user;

console.log(name, age);

// ✔ Nested Destructuring
const obj = { data: { id: 1 } };
const { data: { id } } = obj;

// ⭐ Interview Answer
// Destructuring is a concise syntax to extract values from arrays or objects into variables.