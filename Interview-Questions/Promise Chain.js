
// ⭐ 31. What is a Promise Chain?
// A promise chain is when multiple .then() calls are linked together so each step runs after the previous one finishes.

// ✔ Example:
new Promise((resolve) => resolve(10))
  .then(num => {
    console.log(num);    // 10
    return num * 2;
  })
  .then(result => {
    console.log(result); // 20
    return result + 5;
  })
  .then(final => console.log(final)); // 25

// ⭐ Interview Answer
// A promise chain allows sequential execution of asynchronous operations by returning a promise in each .then().