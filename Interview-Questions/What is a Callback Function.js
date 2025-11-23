// ⭐ 1. What is a Callback Function? (With Examples)
// A callback function is a function that is passed as an argument to another function and executed later (after an event, timeout, or operation completes).
// ✔ Real-Life Example
// You order food → give your phone number → restaurant calls you later.
// The “call back later” = callback function.
// ✔ JavaScript Example

function greet(name, callback) {
  console.log("Hello " + name);
  callback();  // execute callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Akash", sayBye);


// Explanation:
// sayBye is passed as a callback to greet
// greet decides when to execute it
// ✔ Where Are Callbacks Used in JavaScript?
// Callbacks are used in many asynchronous operations:
// setTimeout()
// Event listeners
// Old-style API calls (XMLHttpRequest)
// Fetch/database calls (before promises)
// Animations
// File handling in Node.js
// ✔ Example: setTimeout Callback

setTimeout(() => {
  console.log("Executed later!");
}, 2000);


// ➡ The arrow function is a callback executed after 2 seconds.
// ⭐ Interview One-Line Definition
// A callback is a function passed to another function, allowing JavaScript to execute code later, especially in asynchronous operations.
