
// ⭐ 62. What is a WeakMap?
// WeakMap stores key-value pairs where keys must be objects, and references are weak, meaning they do NOT prevent garbage collection.

// ✔ Example:
let obj = { name: "Akash" };
const wm = new WeakMap();

wm.set(obj, "developer");
console.log(wm.get(obj));  // "developer"

obj = null; // object eligible for garbage collection

// ⭐ Why use WeakMap?
// Prevent memory leaks
// Good for storing metadata about objects
// ⭐ Interview Answer
// WeakMap holds weakly referenced object keys that can be garbage collected, preventing memory leaks.
