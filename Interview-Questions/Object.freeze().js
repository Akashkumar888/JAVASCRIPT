
// ⭐ 51. What is Object.freeze()?
// Object.freeze() makes an object immutable — you cannot:
// Add properties
// Delete properties
// Modify existing properties
// Reassign nested objects (shallow freeze)

// ✔ Example:
const obj = { name: "Akash", age: 21 };
Object.freeze(obj);

obj.name = "Rahul";   // ❌ No effect
obj.city = "Delhi";   // ❌ No effect

console.log(obj); // { name: "Akash", age: 21 }

// ⭐ Interview Answer
// Object.freeze() prevents any modifications to an object. It is a shallow freeze, meaning nested objects are NOT frozen by default.