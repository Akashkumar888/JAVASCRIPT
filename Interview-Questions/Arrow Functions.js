
// ⭐ 3. What are Arrow Functions? (Full Explanation)
// Arrow functions are a shorter, cleaner way to write functions introduced in ES6.
// They make your code more concise and easier to read.

// ⭐ Basic Syntax
const add = (a, b) => a + b;

// This is equivalent to:

function add(a, b) {
  return a + b;
}

// Arrow functions reduce boilerplate and simplify functional-style coding.
// ⭐ Key Differences Between Arrow Functions & Normal Functions
// ✔ 1. Arrow functions do not have their own this
// Instead, they use lexical this, meaning they take this from the outer scope.
// This makes arrow functions perfect for:
// Callbacks
// Event handlers
// Object methods where you don’t want this to change
// ✔ 2. Arrow functions do not have their own arguments object
// Normal function:
function test() {
  console.log(arguments);
}
test(1,2,3);  // works

// Arrow function:
const test = () => {
  console.log(arguments); // ❌ Error
};

// To get arguments in arrow functions, you must use rest parameters:
const test = (...args) => console.log(args);

// ✔ 3. Arrow functions cannot be used as constructors
// This will throw an error:
const Person = () => {};
const p = new Person(); // ❌ TypeError
// Only normal functions or classes can be constructor functions.

// ✔ 4. Arrow functions provide shorter syntax
// Examples:
// No braces when returning one expression
// No return keyword needed
// No function keyword

const greet = () => console.log("Hello");

// ⭐ More Examples
// ✔ Arrow function with no parameters:
const hello = () => console.log("Hello World");

// ✔ Arrow function with one parameter:
const square = x => x * x;
// ✔ Arrow function with multiple lines:
const sum = (a, b) => {
  const result = a + b;
  return result;
};

// ⭐ One-Line Interview Answer
// Arrow functions are a shorter syntax for writing functions introduced in ES6, but they do not have their own this, arguments, or constructor ability. They use lexical scoping and are ideal for callbacks and functional programming.