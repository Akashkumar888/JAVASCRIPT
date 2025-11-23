
// ⭐ 50. What is Strict Mode?
// Strict mode ("use strict") enables safer JavaScript by catching errors that normal mode ignores.
// ✔ Enable it:
// "use strict";

// ⭐ What strict mode does:
// ✔ Prevents using undeclared variables
// ✔ Disallows duplicate parameters
// ✔ Prevents assigning to read-only properties
// ✔ Makes this in functions undefined instead of window
// ✔ Prevents silent errors

// ✔ Example:
"use strict";
x = 10; // ❌ ReferenceError

// ⭐ Interview Answer
// Strict mode makes JavaScript execution cleaner by eliminating unsafe behavior and catching silent errors.


// ⭐ 72. What is the role of "use strict"?
// "use strict" enables Strict Mode, which makes JavaScript more secure and avoids silent errors.
// ✔ Features of strict mode:
// Prevents using undeclared variables
// Makes this undefined in functions (instead of window)
// Disallows duplicate function parameters
// Disallows writing to read-only properties
// Prevents accidental globals
// Makes code faster (JS engine optimizations)

✔ Example:
"use strict";
x = 10;   // ❌ ReferenceError (because x is not declared)

// ⭐ Interview Answer
// Strict mode catches silent errors, prevents unsafe actions, and enforces cleaner JavaScript.