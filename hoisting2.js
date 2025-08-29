
// let with Temporal Dead Zone (TDZ)
console.log(b); // ReferenceError
let b = 3;


// What happens internally?
// let (and const) are also hoisted, but they are placed in the Temporal Dead Zone (TDZ) until execution reaches their declaration.
// You cannot access them before initialization.
// So the code acts like:

// // b is hoisted, but in TDZ
// console.log(b); // ❌ ReferenceError
// let b = 3; // initialized here

