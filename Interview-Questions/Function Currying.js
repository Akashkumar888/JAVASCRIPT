
// ⭐ 63. What is Function Currying?

// Currying transforms a function of multiple arguments into a series of functions, each taking one argument.

// ✔ Example:
function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curry(1)(2)(3)); // 6

// ⭐ ES6 version:
const curry = a => b => c => a + b + c;

// ⭐ Interview Answer
// Currying converts a multi-argument function into nested single-argument functions, enabling partial function application.