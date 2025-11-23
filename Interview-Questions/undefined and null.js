
// ⭐ 9. Difference Between undefined and null (Full Explanation)
// JavaScript has two special values to represent "nothing" or "empty", but they are not the same.

// ⭐ 1. What is undefined?
// undefined means:
// A variable is declared but not assigned a value
// A function does not return anything
// Property does not exist on an object
// Array index is empty
// ✔ Example:
let a;
console.log(a);  // undefined

// ✔ Type of undefined:
// console.log(typeof undefined); // "undefined"

// ⭐ 2. What is null?
// null means:
// A variable is intentionally empty
// Developer manually assigns “no value”

// ✔ Example:
let b = null;
console.log(b);  // null

// ✔ Type of null:
console.log(typeof null); // "object"


// ⚠️ Fun fact: "object" is a bug in JavaScript (historical mistake).
// ⭐ 3. Key Differences (Line-by-line)
undefined → variable exists but not assigned
null → variable is intentionally set to no value

// undefined is assigned by JavaScript
// null is assigned by developers
// typeof undefined → "undefined"
// typeof null → "object" (bug)

// ⭐ 4. Examples
// ✔ Example 1: Not assigned variable
let a;
console.log(a); // undefined

// ✔ Example 2: Intentionally empty
let b = null;
console.log(b); // null

// ✔ Example 3: Missing object property
const obj = {};
console.log(obj.name); // undefined

// ✔ Example 4: Function returns nothing
function test() {}
console.log(test()); // undefined

// ⭐ 5. Interview One-Line Answer
// undefined means a variable has been declared but not assigned, while null is an intentional assignment that represents “no value.”
