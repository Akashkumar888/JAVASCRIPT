
// ⭐ 94. What is a Constructor Function?

// A constructor function is used to create multiple objects with the same structure.
// You use the new keyword.

// ✔ Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Akash", 21);

// ✔ With methods:
Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};

// ⭐ Interview Answer
// A constructor function is a function used with new to create objects and set properties via this.