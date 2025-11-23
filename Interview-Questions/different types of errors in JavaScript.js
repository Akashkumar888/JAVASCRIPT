
// ⭐ 41. What are the different types of errors in JavaScript?
// JavaScript has several built-in error types:
// ✔ 1. SyntaxError
// Occurs when code breaks JavaScript syntax.

console.log("Hello"  // missing parenthesis

// ✔ 2. ReferenceError
// Accessing a variable that doesn’t exist.

console.log(x); // x is not defined

// ✔ 3. TypeError
// Using a value of the wrong type.

let num = 10;
num.toUpperCase();  // ❌ number has no toUpperCase method

// ✔ 4. RangeError
// Numbers out of range.

new Array(-1);  // ❌ invalid array length

// ✔ 5. URIError
// Incorrect use of URI functions.
decodeURI("%"); // invalid character

// ✔ 6. EvalError
// Related to deprecated eval() misusage.
// ⭐ Interview Answer
// JavaScript errors include SyntaxError, ReferenceError, TypeError, RangeError, EvalError, and URIError.
