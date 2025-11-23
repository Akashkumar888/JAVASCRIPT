
// ⭐ 59. How do JSON.parse() and JSON.stringify() work?
✔ JSON.stringify()

// Converts a JavaScript object into a JSON string.

const obj = { name: "Akash", age: 21 };
const str = JSON.stringify(obj);

console.log(str);  // '{"name":"Akash","age":21}'

// ✔ JSON.parse()

// Converts a JSON string into a JavaScript object.

const obj2 = JSON.parse(str);
console.log(obj2.name); // "Akash"

// ⭐ Interview Summary
// stringify → object → JSON string
// parse → JSON string → JavaScript object