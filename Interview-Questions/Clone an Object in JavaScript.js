
// ⭐ 25. How to Clone an Object in JavaScript?
// ✔ 1. Spread Operator (Shallow Copy)
const newObj = { ...oldObj };

// ✔ 2. Object.assign()
const newObj = Object.assign({}, oldObj);

// ✔ 3. JSON Deep Clone
const deepClone = JSON.parse(JSON.stringify(obj));

// ✔ 4. Structured Clone (Best)
const clone = structuredClone(obj);

// ⭐ 54. How to Clone an Object?
// ✔ 1. Spread operator (Shallow copy)
const clone = { ...obj };

// ✔ 2. Object.assign() (Shallow copy)
const clone = Object.assign({}, obj);

// ✔ 3. Deep Clone using JSON
const deepClone = JSON.parse(JSON.stringify(obj));


// ⚠️ Does not support functions, undefined, dates.

// ✔ 4. Best method: structuredClone()
const clone = structuredClone(obj);