
// ⭐ 18. What is a Promise in JavaScript?
// A Promise represents a future value.
// States:
// Pending
// Resolved
// Rejected

// Example:
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done"), 1000);
});

p.then(res => console.log(res))
 .catch(err => console.log(err));
console.log(p);
// ⭐ Interview Answer
// A Promise is an object representing an asynchronous operation that will complete in the future.

// ⭐ 77. What is Promise.all()?
// Promise.all() runs multiple promises in parallel and returns a single promise that:
// 👉 resolves when all promises succeed
// ❌ rejects if any promise fails

// ✔ Example:
Promise.all([
  fetch("/user"),
  fetch("/posts"),
]).then(res => console.log("All done"))
.catch(err => console.log("One failed"));

// ⭐ Interview Answer
// Promise.all() waits for all promises to resolve and fails fast if any promise rejects.
