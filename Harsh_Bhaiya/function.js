var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// ---------------------
// ✅ ES5 Function Types
// ---------------------

// 1. Function Declaration (ES5)
function funcDeclaration() {
  console.log("1. Function Declaration (ES5):");
  for (const idx in arr) {
    console.log(idx, arr[idx]);
  }
}
funcDeclaration();


// 2. Function Expression (ES5)
var funcExpression = function() {
  console.log("2. Function Expression (ES5):");
  for (const idx in arr) {
    console.log(idx, arr[idx]);
  }
};
funcExpression();


// 3. Immediately Invoked Function Expression (IIFE) (ES5)
(function() {
  console.log("3. IIFE (ES5):");
  for (const idx in arr) {
    console.log(idx, arr[idx]);
  }
})();


// 4. Function Constructor (ES5)
var funcConstructor = new Function('arr', `
  console.log("4. Function Constructor (ES5):");
  for (const idx in arr) {
    console.log(idx, arr[idx]);
  }
`);
funcConstructor(arr);


// ---------------------
// ✅ ES6 Function Types
// ---------------------

// 5. Arrow Function (ES6)
const arrowFunc = () => {
  console.log("5. Arrow Function (ES6):");
  for (const idx in arr) {
    console.log(idx, arr[idx]);
  }
};
arrowFunc();


// 6. Method in Object (ES6 Method Shorthand)
var obj = {
  methodInObject() {
    console.log("6. Method in Object (ES6):");
    for (const idx in arr) {
      console.log(idx, arr[idx]);
    }
  }
};
obj.methodInObject();


