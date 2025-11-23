
// ⭐ 90. How to Generate Random Numbers?
// ✔ 1. Random number between 0 and 1:
Math.random();

// ✔ 2. Random integer between 0 and N:
Math.floor(Math.random() * (N + 1));

// ✔ 3. Random integer between min and max:
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(10, 20)); // random between 10–20

// ✔ 4. Random item from array:
const arr = ["A", "B", "C"];
const random = arr[Math.floor(Math.random() * arr.length)];

// ⭐ Interview Answer
// Use Math.random() combined with Math.floor() to generate random numbers or ranges.
