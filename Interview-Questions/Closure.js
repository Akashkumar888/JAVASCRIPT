
// ⭐ 4. What is a Closure? (Super Detailed Explanation)
// A closure is created when:
// ➡ A function remembers the variables of its outer function,
// ➡ Even after the outer function has returned.
// In JavaScript, every function automatically forms a closure.
// ⭐ Basic Closure Example

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const count = outer();
count(); // 1
count(); // 2
count(); // 3

// ✔ Why this works?
// outer() has finished executing
// But inner() still remembers counter
// So counter is NOT destroyed — closure saves it
// ⭐ Closure Uses
// Data hiding
// Private variables
// Currying
// Memoization

// Event handlers
// setTimeout / async functions
// Factory functions
// ⭐ Arrow Functions also create closures (100% YES)
// Arrow functions behave the same way — they close over variables from outer scope.

// ⭐ Now, Let’s Break Down ALL Your Examples in Super Detail
// ⭐ Example 1 — Simple Closure
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const count = outer();
count();
count();
count();

// 🔍 Execution Flow
// outer() runs → creates counter = 0
// Returns inner
// count() runs inner, accessing counter
// Closure keeps counter alive between calls

// ⭐ Example 2 — Nested Closures with return inside inner inside outer
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);

    function small() {
      counter++;
      console.log(counter);
    }

    return small;
  }

  return inner;
}

const count = outer();  
const callSmall = count(); 
callSmall();

// 🔍 Step-by-Step Execution
// outer() runs → counter = 0 → returns inner
// count() runs → calls inner
// counter becomes 1
// prints 1
// returns function small
// callSmall() runs → calls small
// counter becomes 2
// prints 2
// ✔ Closure chain:
// small closes over inner’s scope
// inner closes over outer’s scope
// ➡ Result: Both functions share the same counter.

// ⭐ Example 3 — Calling outer() without calling inner
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

outer(); 

// ✔ Explanation:
// outer() runs
// Returns inner

// BUT you did NOT call the returned function
// ➡ So inner() never executes → nothing is printed.

// ⭐ Example 4 — outer()() double call
outer()();


// Equivalent to:

const temp = outer();
temp();

// ✔ Explanation:
// First outer() runs → returns inner
// Second () calls inner
// So closure WORKS and prints 1
// ⭐ Now the MOST IMPORTANT EXAMPLE — Your Complex Nested Code
// You wrote:

function returnFunc(){
  let a=1;
  console.log(a);

  const x=()=>{
    console.log(a);

    const y=()=>{
      console.log(a);

      const z=()=>{
        console.log(a);
      }

      a=1234;
      z();
    }

    a=999;
    y();
  }

  a=560;
  x();
  return x;
}

const value = returnFunc;
value();

// ⚠️ THIS IS WRONG.
// You are NOT calling the function — you are assigning the function.
// ✔ Correct code:
// const value = returnFunc();  // Must CALL the function
// value();                     // Then call returned function

// ⭐ Now Full Correct Code With Comments
function returnFunc() {
  let a = 1;
  console.log("Initial a:", a);  // 1

  const x = () => {
    console.log("Inside x, a =", a);

    const y = () => {
      console.log("Inside y, BEFORE change, a =", a);

      const z = () => {
        console.log("Inside z, a =", a);
      };

      a = 1234; // modify a
      console.log("Inside y, AFTER change, a =", a);
      z();
    };

    a = 999;  // modify a
    console.log("Inside x, AFTER changing a =", a);
    y();
  };

  a = 560; // modify a
  console.log("Before calling x, a =", a); // 560

  x();  // Call x
  return x; 
}

const value = returnFunc();  // Must CALL
value();  // Calling returned function

// ⭐ WHY DOES THIS WORK?
// Because every inner function remembers the SAME variable a.
// ✔ Closure chain:
// returnFunc()
//  ├── x()
//       ├── y()
//            └── z()

// All functions share a because they are inside the same lexical scope.
// ➡ Changing a in one function changes it for ALL.
// ⭐ Outputs in Sequence
// Let’s print step-by-step:

// Initial a: 1
// Before calling x, a = 560
// Inside x, a = 560
// Inside x, AFTER changing a = 999
// Inside y, BEFORE change, a = 999
// Inside y, AFTER change, a = 1234
// Inside z, a = 1234


// Then calling value() again reuses the SAME a:
// Inside x, a = 1234
// Inside x, AFTER changing a = 999
// Inside y, BEFORE change, a = 999
// Inside y, AFTER change, a = 1234
// Inside z, a = 1234


// ➡ THIS IS TRUE POWER OF CLOSURES.
// ⭐ Finally: Arrow Function Closures MATCH Normal Function Closures
const outer = () => {
  let x = 10;

  return () => {
    console.log(x);
  };
};

const f = outer();
f(); // 10

// Both behave exactly the same.
// ⭐ Ultimate Interview Summary
// A closure is formed when an inner function retains access to variables in its outer scope even after the outer function has finished executing. Nested closures build a chain of preserved lexical environments. Both arrow functions and normal functions create closures.