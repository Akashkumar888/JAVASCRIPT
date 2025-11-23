
// ⭐ 75. What is .reduce() used for?
// .reduce() executes a reducer function on each array element and builds a single output value.
// ✔ Uses:
// Sum
// Max/Min
// Flatten array
// Count frequency
// Remove duplicates
// Convert array → object
// Implement map/filter

// ✔ Example: sum
const arr = [1,2,3];
const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 6

// ⭐ Interview Answer
// .reduce() reduces an array into a single value by accumulating results.