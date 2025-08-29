
// When we say JavaScript is dynamically typed, it means:
// You don’t need to declare a type when creating a variable.
// A variable’s type is determined while the program is running (runtime), not before execution (like in C++/Java).
// A variable can change its type during execution.


let x = 10;       // number
console.log(typeof x); // "number"
console.log(x); // "number"

x = "hello";      // now it's a string
console.log(typeof x); // "string"
console.log(x);// "string"

x = true;         // now it's a boolean
console.log(typeof x); // "boolean"
console.log(x); // "boolean"


// 🔹 In statically typed languages (like C++, Java, TypeScript), the type is fixed when you declare the variable:

// int x = 10;   // must always hold an int
// x = "hello";  // ❌ compile-time error


// So in short:
// 👉 Dynamically typed = variable type can change at runtime.
// 👉 Statically typed = variable type is fixed at compile-time.



// Both allow you to reassign values, so the type of the variable can change at runtime:

let a = 42;    
console.log(typeof a); // "number"

a = "hello";   
console.log(typeof a); // "string"

var b = true;  
console.log(typeof b); // "boolean"

b = 99;        
console.log(typeof b); // "number"

// With const, you cannot reassign the variable, so its type cannot change.
// const x = 10;
// console.log(typeof x); // "number"
// x = "hello"; // ❌ TypeError: Assignment to constant variable.

// If const holds an object or array, you can still mutate its contents (because the binding is constant, not the internal data):

const arr = [1, 2, 3];
arr.push(4);  // ✅ works
console.log(arr); // [1,2,3,4]

arr = [9, 8]; // ❌ TypeError: Assignment to constant variable
console.log(arr);

