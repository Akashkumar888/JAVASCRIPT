
// ⭐ 61. What are JavaScript Modules?
// JavaScript modules allow you to split code into separate files that can be imported and exported.
// Modules help with:
// Code organization
// Reusability
// Avoiding global namespace pollution
// Better maintainability

// ✔ Example — Export (module.js)
export const name = "Akash";

export function greet() {
  console.log("Hello");
}

// ✔ Example — Import (app.js)
import { name, greet } from "./module.js";

greet();        // Hello
console.log(name); // Akash

// ⭐ Interview Answer
// Modules allow splitting JavaScript code into reusable, maintainable files using import and export.