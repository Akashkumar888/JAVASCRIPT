
// Runs multiple promises in parallel.
// Returns a single promise that resolves when all promises resolve.
// If any promise rejects, the whole Promise.all rejects.
// 📌 Example:

let p1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
let p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));
let p3 = new Promise(resolve => setTimeout(() => resolve("Third"), 1500));

Promise.all([p1, p2, p3])
  .then(results => console.log(results))  // ["First", "Second", "Third"]
  .catch(error => console.error(error));

  
//   ⏱ Timeline of resolution:
// After 1s → p1 resolves → "First".
// After 1.5s → p3 resolves → "Third".
// After 2s → p2 resolves → "Second".
// So resolution happens in this time order:
// 👉 First → Third → Second.

// Promise.all waits until all promises are resolved.
// It collects results in the same order you passed them, not in the order they finished.
// So the results array will always be:
// ["First", "Second", "Third"]
// even though internally they resolved in First → Third → Second.
// ✅ Key takeaway:
// Resolution timing: p1 → p3 → p2.
// Final output order: always [p1, p2, p3] → ["First", "Second", "Third"].

