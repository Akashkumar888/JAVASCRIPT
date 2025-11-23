
// ⭐ 74. How to Remove Duplicates from an Array?
// ✔ 1. Using Set (best & easiest)
const arr = [1,1,2,2,3];
const unique = [...new Set(arr)];

console.log(unique); // [1,2,3]

// ✔ 2. Using filter()
const unique = arr.filter((item, index) => arr.indexOf(item) === index);

// ✔ 3. Using reduce()
const unique = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);

// ⭐ Interview Answer
// Use new Set(array) to remove duplicates efficiently.