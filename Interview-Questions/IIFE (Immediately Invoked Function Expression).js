
// ⭐ 21. What is an IIFE (Immediately Invoked Function Expression)?
// An IIFE is a function that runs immediately after its creation.

// ✔ Syntax:
(function () {
  console.log("I am an IIFE");
})();

// ✔ Why use IIFE?
// To create a private scope
// To avoid global variable pollution
// Used in older JS before modules existed

// ✔ Example: Private variable
const counter = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

console.log(counter()); // 1
console.log(counter()); // 2
