
// ⭐ 23. What is the this keyword?
// this refers to the object that is calling the function.
// Value of this changes depending on context.

// ✔ 1. In a method → refers to the object
const obj = {
  name: "Akash",
  show() {
    console.log(this.name); // Akash
  }
};

// obj.show();

// ✔ 2. In a regular function → undefined (strict mode) or window (non-strict)
function test() {
  console.log(this); 
}
test(); // window (in browser)

// ✔ 3. In event listener → element that triggered the event
button.addEventListener("click", function() {
  console.log(this); // button element
});

// ✔ 4. Arrow functions do NOT have their own this
// They use lexical this (value from parent scope).

const obj = {
  name: "Akash",
  show: () => {
    console.log(this.name); // undefined
  }
};

obj.show();

// ⭐ 43. What is this in JavaScript?
// this refers to the object that is executing the current function.

// ✔ 1. In an object method → the object
const user = {
  name: "Akash",
  show() {
    console.log(this.name);
  }
};

user.show(); // "Akash"

// ✔ 2. In a function (browser) → window or undefined in strict mode
function test() {
  console.log(this);
}
test(); // window

// ✔ 3. In an event listener → the element
btn.addEventListener("click", function() {
  console.log(this); // button element
});

// ✔ 4. Arrow functions → NO own this
// Arrow functions inherit this from parent (lexical this).

const obj = {
  name: "Akash",
  f: () => console.log(this.name) // undefined
};

// ⭐ Interview Answer
// this refers to the calling context of a function; arrow functions do not have their own this.