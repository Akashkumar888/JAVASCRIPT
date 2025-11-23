
// ✅ Quick rules (the brain shortcuts)
// + does addition when both operands are numbers.
// + does string concatenation when either operand is a string.
// Evaluation is left → right (left associativity).
// Other arithmetic operators (- * / %) always coerce operands to numbers.
// To force numeric conversion, use Number(...), unary +, parseInt/parseFloat (careful), or ensure number is on left before a + (but explicit conversion is clearer).
// 🔬 All permutations of 10 (number) and "10" (string)
// We have 3 slots; each can be 10 or "10". That’s 8 cases:

// // 1
// 10 + 10 + 10
// // 2
// 10 + 10 + "10"
// // 3
// 10 + "10" + 10
// // 4
// 10 + "10" + "10"
// // 5
// "10" + 10 + 10
// // 6
// "10" + 10 + "10"
// // 7
// "10" + "10" + 10
// // 8
// "10" + "10" + "10"


// Now step-by-step outputs and reasoning:
// Case 1 — 10 + 10 + 10
// Step 1: 10 + 10 → numeric → 20
// Step 2: 20 + 10 → numeric → 30
// Result: 30 (number)

// Case 2 — 10 + 10 + "10"
// Step 1: 10 + 10 → numeric → 20
// Step 2: 20 + "10" → one side is string → convert 20 → "20" then concat "20" + "10" → "2010"
// Result: "2010" (string)

// Case 3 — 10 + "10" + 10
// Step 1: 10 + "10" → string concat → "1010"
// Step 2: "1010" + 10" → string concat → "101010"
// Result: "101010" (string)

// Case 4 — 10 + "10" + "10"
// Step 1: 10 + "10" → "1010"
// Step 2: "1010" + "10" → "101010"
// Result: "101010" (string)

// Case 5 — "10" + 10 + 10
// Step 1: "10" + 10 → "1010"
// Step 2: "1010" + 10 → "101010"
// Result: "101010" (string)

// Case 6 — "10" + 10 + "10"
// Step 1: "10" + 10 → "1010"
// Step 2: "1010" + "10" → "101010"
// Result: "101010" (string)

// Case 7 — "10" + "10" + 10
// Step 1: "10" + "10" → "1010"
// Step 2: "1010" + 10 → "101010"
// Result: "101010" (string)

// Case 8 — "10" + "10" + "10"
// All concatenation → "101010"
// Result: "101010" (string)

// 🔁 Observation (pattern)
// If any string appears in the left-most position before numbers are added, the rest become strings via concatenation and everything after stays as string concatenation.
// If numbers start the expression and you keep adding numbers, numeric addition happens until a string appears. Once a string is involved, subsequent + operations will concatenate as strings.
// 🧰 How to force numeric addition (always get 30 for three tens)
// Use explicit conversions:
// // Option A: Number()
// console.log(Number("10") + 10 + 10);    // 30
// console.log(10 + 10 + Number("10"));    // 30

// // Option B: unary +
// console.log(+"10" + 10 + 10);           // 30

// // Option C: parseInt/parseFloat (careful with non-decimal and whitespace)
// console.log(parseInt("10", 10) + 10 + 10); // 30

// // Option D: coerce left operand to number to keep addition earlier
// console.log(10 + 10 + "10");            // "2010" (NOT numeric)
// // so explicit conversion is safer

// Best practice: use Number(...) or unary + to be explicit and avoid surprising results.
// ⚠️ Common gotchas & extra examples
// Other operators coerce to numbers:
// "10" - 0    // 10  (number)
// "10" * 1    // 10
// "10" / 2    // 5

// Empty array / object conversions:

// [] + []           // ""    (both arrays toString => "")
// [] + {}           // "[object Object]"
// {} + []           // 0 or "[object Object]" depending on parsing context (be careful: leading `{}` may be block)

// null and undefined:
// null + 1        // 1     (null -> 0)
// undefined + 1   // NaN   (undefined -> NaN)
// null + "1"      // "null1" (string concat if other operand is string)

// Numeric strings with spaces or plus sign:

// +" 10 "         // 10
// Number(" 10 ")  // 10
// parseInt("08")  // 8  (but parseInt("08") can be tricky in old implementations unless radix specified)
// parseFloat("3.14") // 3.14

// Object/Array to primitive:
// When a non-primitive is used with +, JS calls valueOf() or toString() to convert it to primitive. Arrays produce comma-separated strings; objects usually produce "[object Object]".
// ✅ TL;DR (cheat-sheet)
// Evaluate left → right.
// If both sides are numbers → addition.
// If either side is a string (at time of operation) → convert other side to string → concatenate.
// To ensure numeric behavior, explicitly convert strings to numbers: Number(...) or +.