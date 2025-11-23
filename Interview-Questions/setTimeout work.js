
// ⭐ 10. How does setTimeout work? (Full Explanation)

// Even though JavaScript is single-threaded, it can still run asynchronous tasks like setTimeout() because of the cooperation between:
// Call Stack
// Web APIs
// Callback Queue (Task Queue)
// Event Loop
// JavaScript itself is synchronous.
// Async behavior is handled by the browser or Node.js environment, not the JS engine.

// ⭐ Basic Example
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);

console.log("3");

// ✔ Output:
1
3
2

// ⭐ How setTimeout Actually Works (Step-by-Step)
// 1️⃣ JS runs console.log("1")
// Added to call stack
// Printed immediately
// 2️⃣ JS reaches setTimeout(callback, 2000)
// The callback function is sent to the Web API environment
// The timer runs outside the JavaScript engine
// setTimeout itself finishes immediately
// 3️⃣ JS continues executing next lines
// Prints "3"
// 4️⃣ After 2 seconds, Web API moves the callback to the Callback Queue
// 5️⃣ The Event Loop constantly checks:
// Is the call stack empty?
// 6️⃣ When stack is empty

// Callback is moved from the Callback Queue → Call Stack
// Callback executes → prints "2"

// ⭐ Flow Diagram (Simple)
// setTimeout()  
//    ↓  
// Web API  
//    ↓  
// Timer  
//    ↓  
// Callback Queue  
//    ↓ (event loop checks stack)  
// Call Stack  
//    ↓  
// Execute callback

// ⭐ Trick Example — 0ms Delay
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");

// ✔ Output:
Start
End
Timeout

// ✔ Why?
// Even with 0ms, the callback still:
// Goes to Web API
// Then enters Callback Queue
// Event Loop waits until call stack is empty
// So "Timeout" executes after "End".
// ⭐ Important Note
// setTimeout(() => {}, 0) does NOT run instantly.
// It is delayed until the current stack is free.
// ⭐ One-Line Interview Answer
// setTimeout does not pause JavaScript. Its callback is handled by Web APIs and executed later via the event loop when the call stack becomes empty.