
// ⭐ 66. What is Prototype Chaining?
// Every object in JS has a hidden [[Prototype]] that points to another object.
// This chain continues until it reaches null.

// Used for:
// Inheritance
// Accessing shared methods

// ✔ Example:
const obj = {};
console.log(obj.__proto__); // Object.prototype

// ⭐ Example with custom prototype:
const parent = { greet() { console.log("Hello"); } };
const child = Object.create(parent);

child.greet(); // inherited through prototype chain
// ⭐ Interview Answer
// Prototype chaining is the mechanism where objects inherit properties and methods through their prototype links.