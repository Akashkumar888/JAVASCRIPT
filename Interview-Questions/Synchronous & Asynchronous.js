
// ⭐ 17. Difference Between Synchronous & Asynchronous Code
// ✔ Synchronous
// Code executes line by line
// Blocks further execution

console.log("1");
console.log("2");
console.log("3");

// ✔ Asynchronous
// Does NOT block the thread
// Uses Web APIs, Promises, async/await

console.log("1");
setTimeout(()=>console.log("2"), 1000);
console.log("3");


// Output: 1 3 2

// ⭐ Interview Answer
// Synchronous waits; asynchronous does not block execution.

// ⭐ 34. Difference Between Synchronous and Asynchronous?
// ✔ Synchronous
// Code executes line by line
// Next line waits for previous one
// Can block the main thread

console.log("1");
console.log("2");
console.log("3");

// ✔ Asynchronous
// Runs without blocking
// Uses Web APIs, Promises, async/await

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Output:
// 1
// 3
// 2

// ⭐ Interview Answer
// Synchronous code blocks execution; asynchronous code runs in the background without blocking.