// -----------------------------
// ✅ Basic Function with All Data Types
// -----------------------------

function funcDeclaration(a, b, c, d, e, f, g, h) {
  console.log("------ Data Types Demonstration ------");
  console.log("Number:", a);                 // Number
  console.log("String:", b);                 // String
  console.log("Boolean:", c);                // Boolean
  console.log("Undefined:", d);              // Undefined
  console.log("Null:", e);                   // Null
  console.log("Array:", f);                  // Array
  console.log("Object:", g);                 // Object
  console.log("Function:", h);               // Function
}

funcDeclaration(
  42,                          // actual parameter 1 → Number
  "Akash",                     // actual parameter 2 → String
  true,                        // actual parameter 3 → Boolean
  undefined,                   // actual parameter 4 → Undefined
  null,                        // actual parameter 5 → Null
  [1, 2, 3],                   // actual parameter 6 → Array
  { name: "Akash", age: 21 },  // actual parameter 7 → Object
  function () { return "Hi"; } // actual parameter 8 → Function
);


// -----------------------------
// ✅ Parameter vs Argument
// -----------------------------

/*
💡 PARAMETER:
- Variable listed in function definition. (e.g., a, b, c, d)

💡 ARGUMENT:
- Actual value passed while calling function. (e.g., 12, "Akash", true...)

💡 FORMAL PARAMETERS:
- Variables in function definition: a, b, c, etc.

💡 ACTUAL PARAMETERS:
- Values you pass in function call: funcDeclaration(42, "Akash", ...)
*/


// -----------------------------
// ✅ Pass by Value (Call by Value)
// -----------------------------

function swapByValue(x, y) {
  console.log("Before Swap (Inside):", x, y);
  let temp = x;
  x = y;
  y = temp;
  console.log("After Swap (Inside):", x, y);
}

let a = 10;
let b = 20;
console.log("Before Swap (Outside):", a, b);
swapByValue(a, b); // Values will NOT be swapped outside
console.log("After Swap (Outside):", a, b);


// -----------------------------
// ✅ Pass by Reference Simulation using Objects
// (JavaScript doesn't support pointers, but objects are passed by reference)
// -----------------------------

function swapByReference(obj) {
  console.log("Before Swap (Inside):", obj.a, obj.b);
  let temp = obj.a;
  obj.a = obj.b;
  obj.b = temp;
  console.log("After Swap (Inside):", obj.a, obj.b);
}

let obj = { a: 100, b: 200 };
console.log("Before Swap (Outside):", obj.a, obj.b);
swapByReference(obj); // Swaps successfully
console.log("After Swap (Outside):", obj.a, obj.b);


// -----------------------------
// ✅ Does JavaScript Have Pointers?
// -----------------------------

/*
❌ No, JavaScript does NOT have pointers like C/C++.
✅ But when we pass an object or array, we pass the REFERENCE (not a copy).
So changes made inside the function affect the original object/array.
*/

