
// ⭐ 1. == (Loose Equality)
// ✔ Compares values only
// ✔ Performs type conversion (coercion) before comparison
// If the types are different, JavaScript automatically converts one value to match the other.

// ✔ Example:
console.log("5" == 5);    // true
console.log(true == 1);   // true
console.log(false == 0);  // true
console.log(null == undefined); // true

// Why "5" == 5 is true?
// → "5" is converted to number 5.

// ⭐ 2. === (Strict Equality)
// ✔ Compares value + type
// ✔ No type conversion is performed
// Types must match AND values must match.

// ✔ Example:
console.log("5" === 5);   // false
console.log(1 === true);  // false
console.log(0 === false); // false

// ⭐ 3. Summary of Difference (Line By Line)
// == → checks only value, allows type conversion
// === → checks value and type, no conversion
// == is riskier because JavaScript tries to guess what you meant
// === is safer because it avoids unexpected conversions

// ⭐ 4. Special Notes (Important for Interviews)
// ✔ Use === in almost all scenarios
// It prevents bugs and weird automatic conversions.
// ✔ Only compare null and undefined using ==
// Because:
// null == undefined  // true
// null === undefined // false
// This is the only useful case for ==.

// ⭐ 5. More Tricky Examples (Asked in Interviews)
console.log([] == 0);        // true
console.log("" == 0);        // true
console.log(false == "0");   // true
console.log([1] == 1);       // true
console.log(" \t\r\n" == 0); // true


// These happen because JavaScript converts the values before comparing.
// ⭐ 6. Final Interview Answer
// == compares values with type conversion (loose equality), while === compares both value and type without conversion (strict equality). Always prefer === to avoid unexpected behavior.
