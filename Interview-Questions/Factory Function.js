
// ⭐ 82. What is a Factory Function?
// A factory function returns a new object every time it is called.
// You don't use new, you simply return an object.

// ✔ Example:
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello " + name);
    }
  };
}

const user1 = createUser("Akash", 21);
user1.greet();

// ⭐ Why use factory functions?
// Cleaner than classes
// Avoids using new
// Private variables possible using closure
// ⭐ Interview Answer
// A factory function is a function that returns an object without using the new keyword.