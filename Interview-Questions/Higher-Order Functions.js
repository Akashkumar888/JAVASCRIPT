
// ⭐ 11. What are Higher-Order Functions?
// A higher-order function (HOF) is a function that takes another function as an argument OR returns a function.
// ✔ Example 1 — HOF taking a function

function greet() {
  console.log("Hello");
}

function process(fn) {
  fn(); // calling callback
}

process(greet);

// ✔ Example 2 — HOF returning a function
function outer() {
  return function inner() {
    console.log("Inner function");
  };
}

const fn = outer();
fn();

// ⭐ Interview Answer
// A higher-order function is a function that receives another function as input, returns a function, or both. Examples: map(), filter(), reduce().

// ⭐ 89. What is a Higher-Order Component (HOC)?
// In React, a HOC is a function that takes a component and returns a new component with additional functionality.

// ✔ Example:
function withLogger(Component) {
  return function(props) {
    console.log("Component rendered");
    return <Component {...props} />;
  };
}


// Usage:
// const UserWithLog = withLogger(User);
// ⭐ Interview Answer
// A HOC is a pattern in React used to reuse logic by wrapping one component inside another.