
// ⭐ 79. What is Destructuring With Aliasing?
// Destructuring with aliasing means renaming variables while destructuring.

// ✔ Object example:
const user = { name: "Akash", age: 21 };

const { name: username } = user;

console.log(username); // Akash

// ✔ Array aliasing:
const arr = [10, 20];
const [first: a, second: b] = arr;  ❌ (Not allowed in JS)



// ⚠️ Array aliasing does NOT work like objects — you must assign manually:

const [a, b] = arr;  // correct

// ⭐ Interview Answer
// Destructuring aliasing means renaming variables during extraction using key: newName.