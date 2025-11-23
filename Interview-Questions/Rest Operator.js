
// ⭐ 15. What is the Rest Operator ...?
// Rest collects multiple arguments into an array.

function sum(...nums) {
  console.log(nums);
}

sum(1,2,3,4); // [1,2,3,4]

// ⭐ Summary
// Spread → expands
// Rest → collects

// ⭐ 53. What are Rest Parameters?
// Rest parameters collect multiple arguments into a single array using ....

// ✔ Example:
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6

// ⭐ Interview Answer
// Rest parameters allow representing an unlimited number of arguments as an array.