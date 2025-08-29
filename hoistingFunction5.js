

// Arrow Functions (var f = () => {})

console.log(f); // undefined ❌ (only variable name hoisted)
var f = () => console.log("hi");



// Why not working before assignment:
// With var, only the variable declaration is hoisted:

// var f; // hoisted
// console.log(f); // undefined
// f = () => console.log("hi");



// Function declarations → fully hoisted (safe to call before definition).
// Function expressions (var f = ...) → name hoisted as undefined, function assigned later.
// Function expressions (let / const f = ...) → no hoisting access (TDZ applies).

