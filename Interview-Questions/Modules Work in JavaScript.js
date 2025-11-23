
// ⭐ 100. How Do Modules Work in JavaScript?
// JavaScript modules let you split code into separate files.
// You export values from one file and import them in another.

// ✔ Export (module.js)
export const age = 20;
export function greet() { console.log("Hello"); }

// ✔ Import (app.js)
import { age, greet } from "./module.js";

// ✔ Default export
export default function() {}


// Import:

import fun from "./module.js";

// ⭐ Module features:
// File-level scope
// Avoid global pollution
// Supports async loading
// Only loaded once (cached)
// ⭐ Interview Answer
// Modules allow splitting code into reusable files using import and export. They have their own scope and improve maintainability.
