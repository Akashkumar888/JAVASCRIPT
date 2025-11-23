
// ⭐ 91. What is NaN and How to Check It?
// ✔ What is NaN?

// NaN stands for Not-a-Number.
// It is a special number value that represents an invalid numeric operation.

// ✔ Examples that produce NaN:
0 / 0;            // NaN
"abc" * 5;        // NaN
parseInt("Akash") // NaN
Math.sqrt(-1);    // NaN

// ✔ How to check for NaN?
// ❌ Wrong way:
NaN === NaN  // false


// 📌 Because NaN is the only value in JS that is NOT equal to itself.

// ✔ Correct ways:
// 1️⃣ Number.isNaN() → Best
Number.isNaN(NaN);  // true
Number.isNaN("abc"); // false

// 2️⃣ isNaN() (loose → converts types)
isNaN("abc");   // true  (bad → type coercion)

// ⭐ Interview Answer
// NaN is a special numeric value representing invalid math operations. Use Number.isNaN() to check it safely.