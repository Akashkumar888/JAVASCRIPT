
// ✅ Object created using object literal
var person = {
  name: "Akash",
  age: 21,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Hello, Akash


// ✅ Creating object using Object constructor
var student = new Object();
student.name = "Varshit";
student.age = 20;
student.greet = function() {
  console.log("Hi, " + this.name);
};

student.greet(); // Hi, Varshit


// ✅ Function that returns an object
function createCar(brand, model) {
  return {
    brand: brand,
    model: model,
    start: function() {
      console.log(brand + " " + model + " started");
    }
  };
}

var car1 = createCar("BMW", "X5");
car1.start(); // BMW X5 started


// ✅ Constructor function using `new`
function Phone(brand, price) {
  this.brand = brand;
  this.price = price;
  this.call = function() {
    console.log("Calling from " + this.brand);
  };
}

var phone1 = new Phone("iPhone", 99999);
phone1.call(); // Calling from iPhone


// ✅ Class using ES6 syntax
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

let dog = new Animal("Dog");
dog.speak(); // Dog makes a sound

// ✅ Inheriting from Animal class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(this.name + " barks. Breed: " + this.breed);
  }
}

let d = new Dog("Rocky", "Labrador");
d.speak(); // Rocky barks. Breed: Labrador


// ✅ Creating object with prototype
const human = {
  speak: function() {
    console.log("Hello, I am " + this.name);
  }
};

const akash = Object.create(human);
akash.name = "Akash Kumar";
akash.speak(); // Hello, I am Akash Kumar


// ✅ Only one instance can exist
const config = new function() {
  this.env = "production";
  this.debug = false;
};

console.log(config.env); // production

class MathUtil {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.square(5)); // 25

