
// ⭐ 99. What is a WeakSet?
// WeakSet is like a Set but:
// Stores only objects
// Objects are stored weakly, so garbage collector can remove them
// Does not support size, clear(), or iteration

// ✔ Example:
let obj = { a: 1 };
let ws = new WeakSet();

ws.add(obj);
ws.has(obj); // true

obj = null;  // object removed automatically

// ⭐ Interview Answer
// WeakSet is a set of object references that are weakly held, allowing garbage collection and preventing memory leaks.