
// ⭐ 1. What is JavaScript? (Full, Correct Explanation)

// JavaScript is a:
// High-level programming language
// Interpreted / JIT-compiled
// Single-threaded
// Dynamically typed
// Event-driven
// Prototype-based
// Originally it was created only for browsers, but today JavaScript runs everywhere, including servers, mobile apps, desktop apps, and even databases.

// ⭐ Is JavaScript Client-side or Server-side?
// JavaScript is both a client-side and server-side language.
// ✔ Client-side (Browser)
// Runs using JavaScript engines inside browsers:
// Chrome → V8
// Firefox → SpiderMonkey
// Safari → JavaScriptCore
// Example (runs in browser):

document.body.style.background = "yellow";

// ✔ Server-side (Backend)
// Runs using Node.js, which is built on the Chrome V8 engine.
// Example (Node.js):

console.log("Server running");

// ➡ Because of Node.js, JavaScript is now a full-stack language.
// ⭐ Does JavaScript Support OOP (Object-Oriented Programming)?
// Yes, JavaScript supports OOP, but not in the same way as Java or C++.
// JavaScript uses prototype-based OOP, not classical OOP.
// JavaScript supports:
// Encapsulation
// Inheritance
// Polymorphism
// Abstraction
// Classes (ES6) → syntactic sugar over prototypes

// ✔ Example of OOP in JavaScript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const akash = new Person("Akash", 21);
akash.greet();

// Internally, this class still uses prototype inheritance, not classical inheritance like C++/Java.
// ⭐ Short Interview Answer
// JavaScript is a high-level, single-threaded, prototype-based programming language used both in the browser and on the server (Node.js). It supports object-oriented, functional, and event-driven programming styles.