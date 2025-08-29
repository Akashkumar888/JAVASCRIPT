
// Function Declarations
foo(); // works
function foo() { console.log('hi'); }


// What happens internally?
// Unlike variables, function declarations are hoisted with their full definition.
// JavaScript treats it as if:

// function foo() { console.log('hi'); }
// foo(); // ✅ works

