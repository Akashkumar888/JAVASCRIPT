
// Asynchronous JavaScript originally used callbacks, then promises, and finally evolved into async/await, which makes async code look synchronous.
// ⭐ Old Way: Callbacks → Callback Hell
// ✔ Callback Hell Example
setTimeout(() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");

  }, 1000);

}, 1000);

// ✔ Problems with Callbacks
// Nested code becomes unreadable
// Hard to debug
// Hard to handle errors
// Hard to manage multiple async steps
// This problem is known as "Callback Hell" or "Pyramid of Doom".
// ⭐ Promises — Better Structure
// Promises solve callback hell by providing:
// then()
// catch()
// finally()

// Example:
fetchData()
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Still, chains can become long and complicated.
// ⭐ async/await — Modern and Clean Approach
// async/await is built on top of Promises, but makes the code look like normal synchronous code.

// ⭐ Example using async/await
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 2000);
  });
}

async function getData() {
  console.log("Start");

  const result = await fetchData();

  console.log(result);
}

getData();

// ⭐ What Happens Internally?
// ✔ async keyword
// Makes a function always return a Promise
// Even if you return a normal value, JS wraps it in a Promise
// Allows use of await inside the function
// ✔ await keyword
// Pauses the execution of the async function
// Lets the async function wait for the Promise to resolve
// The rest of program continues running
// When the Promise resolves, execution resumes
// ⭐ Deep Internal Mechanism (Event Loop)
// JavaScript is single-threaded, but async code works using browser/Node.js features:
// ✔ Components:
// Call Stack → runs code line-by-line
// Web APIs → handle timers, fetch, setTimeout
// Callback Queue → holds callbacks ready to execute
// Microtask Queue → holds resolved Promises
// Event Loop → decides what runs next
// ⭐ How async/await actually executes
// Step-by-step:
// JS reaches await fetchData()
// JS sends fetchData’s Promise to Web APIs
// JS pauses the async function
// Other code continues running
// When Promise resolves → result goes to Microtask Queue
// Event Loop checks:
// If Call Stack is empty → executes microtask
// Async function continues after the await line
// ⭐ Why Promise microtasks are faster than callback tasks?
// Promises go to the Microtask Queue
// setTimeout goes to the Callback Queue
// Microtask Queue is always executed first, giving Promises higher priority
// ⭐ One-Line Interview Summary

// async/await is syntax sugar over Promises that pauses async functions until the Promise resolves, using the event loop, microtask queue, and Web APIs to keep JavaScript non-blocking.

// ⭐ 19. What is async/await?
// async/await is modern syntax built on top of Promises.
// ✔ Example:
function fetchData() {
  return new Promise(res => setTimeout(()=>res("Data"), 1000));
}

async function run() {
  console.log("Start");
  const data = await fetchData();
  console.log(data);
}

run();

// ⭐ Interview Answer
// async makes a function return a Promise; await pauses execution until the Promise resolves.