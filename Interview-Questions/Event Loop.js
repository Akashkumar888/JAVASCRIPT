
// ⭐ 30. What is the Event Loop? (In Depth)
// The Event Loop allows JavaScript to perform asynchronous tasks even though it is single-threaded.
// It works with:
// Call Stack
// Web APIs
// Callback Queue
// Microtask Queue (Promises)
// Event Loop
// ✔ Basic Flow:
// Synchronous code runs on Call Stack
// Async tasks go to Web APIs
// When done, callbacks go to:
// Microtask Queue → Promise callbacks
// Callback Queue → setTimeout, events
// Event Loop pushes them to the Call Stack when empty

// ✔ Example:
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// ✔ Output:
1
4
3
2

// Explanation:
// Promise → microtask → higher priority
// setTimeout → callback queue → lower priority