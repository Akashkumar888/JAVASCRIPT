
// ⭐ 46. What is a Generator Function?
// Special function that can pause execution and resume later.
// ✔ Syntax:
// A generator uses function* and yields values.

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateNums();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// ⭐ Interview Answer
// A generator function uses yield to pause and resume execution, producing multiple values over time.