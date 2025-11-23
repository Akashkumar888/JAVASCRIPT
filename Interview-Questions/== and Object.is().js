
// ⭐ 67. Difference Between == and Object.is()?
// ✔ == (Loose Equality)

// Performs type conversion

"5" == 5 → true

// ✔ Object.is() (Same-value comparison)

// No type conversion
// More strict than ===

// ✔ Example:
Object.is(5, "5");  // false
Object.is(NaN, NaN); // true   ✔ unlike ===
Object.is(-0, +0);   // false  ✔ unlike ===

// ⭐ Interview Answer
// Object.is() is a more precise comparison method than ===, handling NaN and signed zeros correctly.


