
// ⭐ 69. What is the Microtask Queue?
// The microtask queue stores tasks that should run immediately after the current execution, before the callback queue.
// ✔ Examples that go to microtask queue:

// Promises (.then)
// MutationObserver
// queueMicrotask()

// ✔ Example:
console.log("1");

Promise.resolve().then(() => console.log("2"));
console.log("3");

// Output:
1
3
2

// ⭐ Interview Answer
// Microtask queue has higher priority than callback queue and executes after the current call stack is empty.