
// ⭐ 36. Difference Between for...of and for...in
// ✔ for...of → Iterates values

// Used for arrays, strings, maps, sets.

const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value); // 10, 20, 30
}

// ✔ for...in → Iterates keys (indexes/properties)

// Used for objects or array indices.

const obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}

// ⭐ Interview Summary
// for...of → values
// for...in → keys