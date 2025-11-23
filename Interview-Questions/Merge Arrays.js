
// ⭐ 93. How to Merge Arrays?
// ✔ 1️⃣ Using Spread Operator (best)
const arr3 = [...arr1, ...arr2];

// ✔ 2️⃣ concat()
const arr3 = arr1.concat(arr2);

// ✔ 3️⃣ Using push + spread
arr1.push(...arr2);

// ⭐ Interview Answer
// Use the spread operator ([...a, ...b]) or .concat() to merge arrays cleanly.