
// ⭐ 16. What are Callback Functions?
// A callback is a function passed as an argument to another function to be executed later.

function greet(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayBye() { console.log("Bye"); }

greet("Akash", sayBye);


// Used in:
// ✔ setTimeout
// ✔ event listeners
// ✔ fetch
// ✔ async operations

// ⭐ 68. What is the Call Stack?
// The call stack is where JavaScript keeps track of the function that is currently running.

// It works in LIFO (Last In, First Out).

// ✔ Example:
function a() { b(); }
function b() { console.log("Hello"); }

a();

// Stack Flow:
push a()
push b()
pop b()
pop a()

// ⭐ Interview Answer
// The call stack manages function execution order in JavaScript using LIFO.