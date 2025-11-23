
// ⭐ 12. What is the use of bind(), call(), and apply()?

// These are used to manually set the value of this.
// ✔ call()
// Calls a function immediately with a given this and arguments (comma separated).

function greet(age) {
  console.log(this.name, age);
}
greet.call({ name: "Akash" }, 21);

// ✔ apply()
// Same as call(), but arguments passed as an array.
greet.apply({ name: "Akash" }, [21]);
// ✔ bind()
// Returns a new function with fixed this, does not run immediately.
const fun = greet.bind({ name: "Akash" }, 21);
fun();

// ⭐ 44. How does bind() work?
// bind() creates a new function with a fixed this value.

// ✔ Example:
function greet() {
  console.log(this.name);
}

const obj = { name: "Akash" };

const fn = greet.bind(obj);
fn(); // "Akash"

// ⭐ Interview Answer
// bind() returns a new function with permanently bound this.

// ⭐ 45. Difference Between call() and apply()?
// Both call a function with a specified this.
// ✔ call()
// Arguments passed individually.

func.call(obj, 1, 2, 3);

// ✔ apply()
// Arguments passed as an array.

func.apply(obj, [1, 2, 3]);

// ⭐ Interview Answer
// call() → args separately
// apply() → args as array

// ⭐ 98. What is the .bind() Method?

// bind() returns a new function with a permanently set this.

// ✔ Example:
function greet() {
  console.log("Hello " + this.name);
}

const user = { name: "Akash" };
const greetAkash = greet.bind(user);

greetAkash(); // Hello Akash

// ✔ bind() doesn’t execute the function — only creates a new one.
// ⭐ Interview Answer

// bind() sets the value of this permanently for a function and returns a new function.