
// ⭐ 33. What is Nullish Coalescing (??)?
// ?? returns the right-side value only if the left side is null or undefined.

// ✔ Example:
let a = null;
let result = a ?? "Default";
console.log(result); // "Default"

// ⚠️ Compare with ||:

// || treats 0, "", false as falsy.

// 0 || "fallback"   // "fallback"
// 0 ?? "fallback"   // 0   (correct!)

// ⭐ Interview Answer
// Nullish coalescing gives fallback values only when the value is null or undefined.