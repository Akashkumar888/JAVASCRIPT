
// ⭐ 64. What are Default Parameters?
// Default parameters assign a value to function arguments when no value is passed.

// ✔ Example:
function greet(name = "Guest") {
  console.log("Hello", name);
}

greet();        // Hello Guest
greet("Akash"); // Hello Akash

// ⭐ Interview Answer
// Default parameters allow initializing function parameters with default values if no argument is passed.