
// ⭐ 32. What is Optional Chaining (?.)?
// Optional chaining allows safe access to deeply nested properties without throwing errors.

✔ Example:
const user = {
  profile: {
    name: "Akash"
  }
};

console.log(user.profile?.name); // "Akash"
console.log(user.address?.city); // undefined (no error)


// Without ?., it would cause:
// TypeError: Cannot read property ...
// ⭐ Interview Answer
// Optional chaining checks if the left side is null/undefined before accessing properties.