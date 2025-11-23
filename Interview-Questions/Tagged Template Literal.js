
// ⭐ 60. What is a Tagged Template Literal?
// A tagged template literal allows you to run a function on template literal parts before producing the final string.

// ✔ Syntax:
tag`Hello ${name} you are ${age}`;

// ✔ Example:
function tag(strings, ...values) {
  console.log(strings); // ["Hello ", " you are ", ""]
  console.log(values);  // ["Akash", 21]
}

const name = "Akash";
const age = 21;

tag`Hello ${name} you are ${age}`;

// ⭐ Uses:
// String formatting
// Sanitizing input
// Creating styled components (e.g., styled-components in React)
// Custom template processing
// ⭐ Interview Answer
// Tagged template literals allow calling a function during template literal processing to customize output
