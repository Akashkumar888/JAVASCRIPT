
// ⭐ 7. What is Hoisting? (Full Explanation)
// Hoisting is JavaScript’s default behavior of moving variable and function declarations to the top of their scope during the compile phase, before code execution begins.
// Only the declarations are hoisted — initializations are NOT.
// To understand hoisting, you must first know how JavaScript executes code.

// ⭐ JavaScript Executes Code in 2 Phases
// ✔ 1. Creation Phase (Memory Allocation)
// Before running any line, the JS engine scans the entire file and allocates memory.
// During this phase:
// • var
// Declared
// Automatically initialized with undefined
// • let & const
// Declared
// NOT initialized (kept in the Temporal Dead Zone — TDZ)
// • Function declarations
// Entire function is hoisted
// Fully initialized
// Ready to be used anywhere in its scope

// ✔ 2. Execution Phase
// JavaScript runs code line by line.
// This is where:
// Assignments happen
// Functions are called
// Errors happen if variables were accessed in TDZ

// ⭐ Summary of Hoisting Behavior (Line by Line)
// • var is hoisted and initialized with undefined
// • let is hoisted but not initialized → TDZ
// • const is hoisted but not initialized → TDZ and must be assigned immediately
// • Function declarations are fully hoisted and can be used before their definition
// ⭐ 1. var Hoisting — Detailed
// Code:
console.log(a);
var a = 10;

// Output:
undefined

// Why?
// Internally JavaScript treats it as:

var a;            // hoisted (initialized as undefined)
console.log(a);   // undefined
a = 10;           // assignment happens here


// Key point:
// var is initialized to undefined during hoisting, so accessing it early does NOT throw an error.

// ⭐ 2. let & const Hoisting — Deep Explanation
// Both let and const are hoisted but remain uninitialized until JavaScript reaches their line.
// This period is called the Temporal Dead Zone (TDZ).
// Example:
console.log(x);
let x = 5;

// Output:
// ReferenceError: Cannot access 'x' before initialization
// Why?
// During creation phase:
// x is declared
// But NOT initialized
// Exists in TDZ until execution reaches let x = 5

// ⭐ 3. Function Declarations Are Fully Hoisted
// Example:
greet();

function greet() {
  console.log("Hello");
}

// Output:
Hello

// Why?
// Internally JS behaves as if:

function greet() { console.log("Hello"); }
greet();

// Function declarations always hoist completely.

// ⭐ 4. Function Expressions Are NOT Fully Hoisted
// Example:
greet(); // ❌ Error
var greet = function () {
  console.log("Hi");
};

// Output:
// TypeError: greet is not a function
// Why?
// JS hoists like this:

var greet = undefined; // only variable, not function
greet(); // greet is undefined → cannot call

// ⭐ 5. Arrow Functions Follow Same Hoisting Rules as Function Expressions
// Example:
hello();  // ❌ Error
let hello = () => console.log("Hi");

// Arrow functions are not hoisted as callable functions.

// ⭐ 6. Trick Example — var Inside Function
// Code:
var a = 1;

function test() {
  console.log(a);
  var a = 2;
}

test();

// Output:
undefined

// Explanation:
// Inside test():

var a;         // hoisted (local variable)
console.log(a); // undefined
a = 2;


// The local a shadows the global a.

// ⭐ 7. Another Trick — let + TDZ
function demo() {
  console.log(b); // ❌ TDZ Error
  let b = 10;
}

demo();

// Output:
ReferenceError


// Because b is hoisted but not initialized.

// ⭐ 8. const Hoisting
console.log(c); // ❌
const c = 5;

// Output:
ReferenceError: Cannot access 'c' before initialization


// const is hoisted but must be initialized at the same time.
// It remains in TDZ until then.
// ⭐ One-Line Interview Answer
// Hoisting is JavaScript’s behavior of moving declarations to the top of their scope. var is initialized as undefined, while let and const remain uninitialized in the TDZ. Function declarations are fully hoisted and can be called before their definition.