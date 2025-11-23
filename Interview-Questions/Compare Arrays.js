
// ⭐ 97. How to Compare Arrays?

// Arrays are objects → comparing with == or === compares reference, not content.

// [1,2] === [1,2] // false

// ✔ Correct: Deep comparison
// 1️⃣ Using JSON
JSON.stringify(arr1) === JSON.stringify(arr2);

// 2️⃣ Manually compare:
function same(a, b) {
  if (a.length !== b.length) return false;
  return a.every((x, i) => x === b[i]);
}

// ⭐ Interview Answer
// Arrays must be compared element-by-element using deep comparison, not == or ===.