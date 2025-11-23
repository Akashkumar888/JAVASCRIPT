
// ⭐ 87. How to Prevent Object Modification?
// ✔ 1. Object.freeze() → fully immutable
Object.freeze(obj);

// ✔ 2. Object.seal() → no add/delete but can modify
Object.seal(obj);

// ✔ 3. const → prevents reassignment (NOT modification)
const obj = { a: 1 };
obj.a = 2;  // allowed

// ✔ 4. Deep freeze (custom)
function deepFreeze(o) {
  Object.freeze(o);
  Object.keys(o).forEach(key => {
    if (typeof o[key] === "object" && o[key] !== null) {
      deepFreeze(o[key]);
    }
  });
}

// ⭐ Interview Answer
// Use Object.freeze() or Object.seal(), or implement a deep freeze to fully prevent modifications.