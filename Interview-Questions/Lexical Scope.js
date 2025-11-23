
// ⭐ 83. What is Lexical Scope?
// Lexical scope means:

// 👉 A function’s scope is determined by its physical location in the code.
// 👉 Inner functions can access outer variables, but not vice versa.

// ✔ Example:
function outer() {
  let a = 10;

  function inner() {
    console.log(a);  // allowed
  }

  inner();
}

outer();


// The inner function “remembers” a → because of lexical scoping.
// ⭐ Interview Answer
// Lexical scope defines how variable access is decided based on where functions are declared, not where they are called.