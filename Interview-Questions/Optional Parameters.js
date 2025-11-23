
// ⭐ 71. What are Optional Parameters?
// Optional parameters allow you to call a function without passing all arguments.
// In JavaScript, parameters become optional when you give them a default value.

// ✔ Example:
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();          // Hello Guest
greet("Akash");   // Hello Akash

// ⭐ Interview Answer
// Optional parameters are function parameters that have default values, allowing calls without providing all arguments.