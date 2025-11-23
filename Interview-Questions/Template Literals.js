
// ⭐ 8. What are Template Literals? (Full Explanation)
// Template literals (introduced in ES6) are a modern way of creating strings in JavaScript.
// They make string handling easier and more powerful than traditional string concatenation.
// Template literals allow:
// Multi-line strings
// String interpolation (inserting variables inside strings)
// Expression evaluation inside strings
// Cleaner, readable syntax
// ⭐ Syntax
// Template literals use backticks instead of quotes:
// `string`
// To insert variables or expressions, use:
// ${ expression }

// ⭐ Example 1 — Variable Interpolation
let name = "Akash";
console.log(`Hello ${name}, welcome!`);

// Output:
Hello Akash, welcome!


// ➡ No need for "Hello " + name + " welcome" anymore.

// ⭐ Example 2 — Multi-Line Strings
const message = `
This is line 1
This is line 2
This is line 3
`;

console.log(message);


// ➡ No need for \n for new lines.

// ⭐ Example 3 — Expressions inside Template Literals
let a = 10, b = 20;
console.log(`Sum = ${a + b}`);


// Output:

Sum = 30


// ➡ ${} can evaluate any JavaScript expression.

// ⭐ Example 4 — Function Call Inside Template Literal
function greet(name) {
  return `Hello ${name}!`;
}

console.log(`${greet("Akash")}`);

// ⭐ Why Use Template Literals?
// More readable
// Cleaner than string concatenation
// Easily embeds variables
// Supports expressions
// Great for HTML templates
// ⭐ One-Line Interview Answer
// Template literals are ES6 strings enclosed in backticks that support multi-line text and allow embedding variables and expressions using ${}.

// ⭐ 92. What are Template Literals?
// Template literals allow:
// Multi-line strings
// String interpolation
// Expression evaluation
// Embedded variables

// They use backticks ( ` ` ).

// ✔ Example:
let name = "Akash";
console.log(`Hello ${name}, welcome!`);

// ✔ Multi-line:
console.log(`
Line 1
Line 2
`);

// ⭐ Interview Answer
// Template literals provide dynamic and multi-line strings with embedded expressions using ${...} syntax.