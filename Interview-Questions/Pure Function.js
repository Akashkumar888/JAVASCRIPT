
// ⭐ 28. What is a Pure Function?
// A pure function:
// Returns the same output for the same input
// Does NOT modify external state
// No side effects

// ✔ Example of Pure Function
function add(a, b) {
  return a + b; 
}

// ✔ Example of Impure Function
let x = 10;

function addToX(y) {
  return x + y; // uses external variable → impure
}
// ⭐ Interview Answer
// Pure function depends only on input and has no side effects.
