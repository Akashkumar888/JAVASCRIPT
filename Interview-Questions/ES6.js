
// ⭐ What is ES6? (Full Explanation)
// ES6 (ECMAScript 2015) is one of the biggest updates to JavaScript, introducing modern features that make the language more powerful, cleaner, and easier to write.
// ES6 is also known as:
// ECMAScript 2015
// Modern JavaScript
// It standardized many features that developers use today.

// ⭐ Key Features Introduced in ES6
// ✔ 1. let and const
// Block-scoped variable declarations.
let x = 10;
const y = 20;

// ✔ 2. Arrow Functions
// Shorter syntax for writing functions.
const add = (a, b) => a + b;

// ✔ 3. Classes
// Cleaner OOP syntax (based on prototypes internally).
class Person {
  constructor(name) {
    this.name = name;
  }
}

// ✔ 4. Template Literals
// Allows multi-line strings and ${} interpolation.
const name = "Akash";
console.log(`Hello ${name}`);

// ✔ 5. Modules (import/export)
// Break code into files.
export const a = 10;
import { a } from "./file.js";

// ✔ 6. Destructuring
// Extract values from objects and arrays.

const { name, age } = person;

// ✔ 7. Default Parameters
// Assign default values to function arguments.

function greet(name = "Guest") {}

// ✔ 8. Spread and Rest Operators

// Spread: expand arrays
// Rest: collect arguments
const arr = [...otherArr];
function sum(...nums) {}

// ⭐ One-Line Interview Answer
// ES6 (ECMAScript 2015) is a major JavaScript update that introduced let/const, arrow functions, classes, template literals, modules, and many modern language features used today.