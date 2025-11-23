
// ⭐ 86. What are Global Variables?
// Variables accessible from anywhere in the program.
// In browser:
// var declared outside function → becomes part of window
// let & const → global but NOT attached to window

// ✔ Example:
var x = 10;
console.log(window.x); // 10

// ⚠️ Problems with global variables:

// Memory leaks
// Naming conflicts
// Hard to debug
// Unwanted overwrites
// ⭐ Interview Answer
// Global variables exist in the global scope and are accessible from any part of the code. They should be minimized to avoid conflicts.