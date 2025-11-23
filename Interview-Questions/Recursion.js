
// ⭐ 96. What is Recursion?

// Recursion is when a function calls itself to solve smaller parts of a problem.

// ✔ Example: factorial
function factorial(n) {
  if (n === 1) return 1;     // base case
  return n * factorial(n - 1); // recursive step
}

// ⭐ Key terms:
// Base case (stopping point)
// Recursive step
// ⭐ Interview Answer
// Recursion is solving a problem by breaking it down into smaller instances of the same problem using self-calling functions.