
// ⭐ 47. What is the new keyword in JS?
// new creates an instance from a constructor function.

// ✔ How it works internally:
function Person(name) {
  this.name = name;
}

const p = new Person("Akash");

// ✔ Under the hood:
// Creates a new empty object
// Sets this to that object
// Links object to prototype
// Returns the object
// ⭐ Interview Answer
// The new keyword creates an object instance using a constructor and sets up prototype linkage.