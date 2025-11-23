
// ⭐ 22. What is Lexical Scoping?
// Lexical scope means a function can access variables of its outer environment where it was defined, not where it is called.

// ✔ Example:
function outer() {
  let x = 10;

  function inner() {
    console.log(x); // inner can access x
  }

  inner();
}

outer();

// ⭐ Interview Sentence
// Lexical scope means inner functions can access variables from the outer function due to how code is written—not how it is executed.