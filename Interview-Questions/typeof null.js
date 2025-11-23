
// ⭐ 56. What is typeof null?
// ✔ Output:
console.log(typeof null); // "object"

// ✔ Why?
// This is a bug in JavaScript since 1995 because the first version stored values as type tags, and null got the “object” tag.
// ⭐ Interview Answer
// typeof null returns "object" due to a historical bug in JavaScript.