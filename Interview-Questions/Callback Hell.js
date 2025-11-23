
// ⭐ 88. What is Callback Hell?
// Callback hell happens when many callbacks are nested inside each other, making code:
// Hard to read
// Hard to maintain
// Hard to debug

// ✔ Example:
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);

// 😭 Looks like:
// ⟩⟩⟩⟩⟩ Pyramid of Doom
// ⭐ Solution:
// Promises
// async/await
// Modular functions
// ⭐ Interview Answer
// Callback hell is deeply nested callbacks that result in unreadable and unmanageable asynchronous code.