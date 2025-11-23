
// ⭐ 85. Difference Between Object.seal() and Object.freeze()
// ✔ Object.seal()
// Cannot add new properties ❌
// Cannot delete properties ❌
// Can modify existing properties ✔️

const obj = { a: 1 };
Object.seal(obj);
obj.a = 50;   // ✔ allowed
obj.b = 100;  // ❌ no

// ✔ Object.freeze()
// Cannot add properties ❌
// Cannot delete properties ❌
// Cannot modify properties ❌

const obj = { a: 1 };
Object.freeze(obj);
obj.a = 50; // ❌ ignored

// ⭐ Interview Answer
// Object.seal() prevents additions/deletions but still allows modifying existing values.
// Object.freeze() makes the object fully immutable.