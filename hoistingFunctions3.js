
// Function Expression with let / const

console.log(f); // ❌ ReferenceError (TDZ)
let f = function() { console.log("hi"); };
f(); // ✅ works only after assignment


// let and const are block-scoped and live in the Temporal Dead Zone (TDZ).
// Cannot access before assignment.

