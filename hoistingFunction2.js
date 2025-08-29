
// Function Expression with var

console.log(f); // undefined
var f = function() { console.log("hi"); };
f(); // ✅ works only after this line


// var f is hoisted but initialized as undefined.
// You cannot call f() before assignment → TypeError: f is not a function.

// undefined
// hi