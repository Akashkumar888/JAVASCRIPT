
// ⭐ 2. Difference Between var, let, and const (Full Detailed Explanation)
// JavaScript provides three keywords for declaring variables: var, let, and const.
// Each one behaves differently in terms of scope, hoisting, re-declaration, and re-assignment.

// ⭐ 1. Scope (Where the variable is accessible)
// ✔ var → Function-scoped
// A var variable is accessible anywhere inside the function where it is declared.
// Does NOT respect block scopes like if, for, while.
// ✔ let → Block-scoped
// A let variable is accessible only inside the nearest { } block.
// ✔ const → Block-scoped
// A const variable is also block-scoped, just like let.

// ⭐ 2. Re-declaration (Can you declare the same variable name again?)
// ✔ var → Re-declaration allowed
// You can declare the same variable name again without error.
// ✔ let → Re-declaration NOT allowed
// You cannot declare the same variable name again in the same scope.
// ✔ const → Re-declaration NOT allowed
// A const variable cannot be re-declared.

// ⭐ 3. Re-assignment (Can you change its value?)
// ✔ var → Re-assignment allowed
// You can update value anytime.
// ✔ let → Re-assignment allowed
// You can update the value later.
// ✔ const → Re-assignment NOT allowed
// Once a value is assigned, it cannot be changed.

// ⭐ 4. Hoisting (Is it moved to top of scope?)
// All three (var, let, const) are hoisted, BUT behave differently:
// ✔ var — hoisted and initialized as undefined
// You can use it before declaration (bad practice, but allowed).
// ✔ let — hoisted but NOT initialized (TDZ)
// Using before declaration gives ReferenceError.
// ✔ const — hoisted but NOT initialized (TDZ)
// Also causes ReferenceError if used before declaration.
// ⭐ TDZ = Temporal Dead Zone
// A period between hoisting and actual declaration where the variable exists but cannot be accessed.

// ⭐ 5. When to Use What?
// ✔ var
// Avoid using in modern JavaScript
// Causes unexpected behavior due to lack of block scope
// ✔ let
// Use when the variable value will change
// Safe, block-scoped
// ✔ const
// Use as default
// Best for constants, functions, objects, arrays
// Prevents accidental re-assignment
// Note: const objects/arrays CAN mutate (only reference cannot change)
// ⭐ Code Examples
// ✔ Example 1: Re-assignment
var x = 10;
let y = 20;
const z = 30;

y = 25; // OK
z = 40; // ❌ TypeError: Assignment to constant variable

// ✔ Example 2: Scope Difference
if (true) {
  var a = 10;
  let b = 20;
}

console.log(a); // 10 → var ignores block scope
console.log(b); // ❌ ReferenceError → let is block-scoped

// ✔ Example 3: Hoisting
console.log(x); // undefined
var x = 5;

console.log(y); // ❌ ReferenceError (TDZ)
let y = 5;

console.log(z); // ❌ ReferenceError (TDZ)
const z = 5;

// ⭐ Interview-Ready One-Line Answer
// var is function-scoped and allows re-declaration; let and const are block-scoped, do not allow re-declaration, and remain in the temporal dead zone until initialized, where const also forbids re-assignment.