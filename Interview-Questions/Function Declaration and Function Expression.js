
// ⭐ 27. Difference Between Function Declaration and Function Expression
// ✔ Function Declaration
// Hoisted
// Can be called before creation

greet(); // works

function greet() {
  console.log("Hello");
}

// ✔ Function Expression
// Stored in a variable
// NOT hoisted as callable
// Cannot be called before definition

sayHi(); // ❌ Error

const sayHi = function () {
  console.log("Hi");
};
