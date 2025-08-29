
// var with hoisting
console.log(a); // undefined
var a = 5;


// What happens internally?
// During compilation, var declarations are hoisted to the top of their scope (global or function).
// But only the declaration is hoisted, not the assignment.
// So JavaScript treats it like this:



// var a;        // hoisted
// console.log(a); // undefined
// a = 5;        // assigned later

