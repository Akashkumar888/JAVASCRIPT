
// 1. Functions that take other functions as arguments:
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Akash", sayBye); 
// Output:
// Hello, Akash
// Goodbye!


// Here, greet is a higher-order function because it takes another function (sayBye) as an argument.

// 2. Functions that return another function:
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10


// Here, multiplier is a higher-order function because it returns another function.
// Built-in Higher Order Functions in JavaScript
// Some commonly used HOFs are:

// map() → transforms each element in an array.

// filter() → filters elements based on a condition.

// reduce() → reduces an array to a single value.


const numbers = [1, 2, 3, 4, 5];

// map
const squared = numbers.map(n => n * n); // [1, 4, 9, 16, 25]

// filter
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

