
// ⭐ 37. What is Memoization?
// Memoization = caching function results to avoid recalculating expensive operations.

// ✔ Example:
function memoizedAdd() {
  const cache = {};

  return function(x) {
    if (cache[x]) {
      console.log("From cache");
      return cache[x];
    }
    console.log("Calculating...");
    cache[x] = x + 10;
    return cache[x];
  };
}

const add = memoizedAdd();
console.log(add(5)); // Calculating...
console.log(add(5)); // From cache

// ⭐ Interview Answer
// Memoization stores expensive function results in cache so repeated inputs are returned faster.
