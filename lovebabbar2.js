// The var is the oldest keyword to declare a variable in JavaScript. It has the Global scoped or function scoped. This means:

// If you create a variable outside of a function, you can use it anywhere in your code.
// If you create a variable inside a function, you can only use it within that function.

// var a = 10
// function f() {
//     var b = 20
//     console.log(a, b)
// }
// f();
// console.log(a);

// var a = 10

// // User can re-declare
// // variable using var
// var a = 8

// // User can update var variable
// a = 7 
// console.log(a);

// // The let keyword is an improved version of the var keyword. It is introduced in the ES6 or EcmaScript 2015. These variables has the block scope. It can’t be accessible outside the particular code block ({block}).

// // The variable is only available inside the block {} where you define it.

// let a = 10;
// function f() {
//     let b = 9
//     console.log(b);
//     console.log(a);
// }
// f();

// // The below code explains the behaviour of let variables when they are re-declared in the same scope.

// let a = 10

// // It is not allowed
// let a = 10

// // It is allowed
// a = 10

// //This code tries to change the value of the const variable.
// const a = 10;
// function f() {
//     a = 9
//     console.log(a)
// }
// f();

// Snake case separates each word with an underscore character (_).

// When using snake case, all letters need to be lowercase.
let number_of_donuts = 34

let fave_phrase = "Hello World"

console.log(number_of_donuts)
console.log(fave_phrase)

// let NUMBER_OF_DONUTS = 34

// let FAVE_PHRASE = "Hello World"

// console.log(NUMBER_OF_DONUTS)
// console.log(FAVE_PHRASE)

// The difference between snake case and kebab case is that kebab case separates each word with a dash character, -, instead of an underscore.

// let number-of-donuts = 34

// let fave-phrase = "Hello World"


// When using camel case, you start by making the first word lowercase. Then, you capitalize the first letter of each word that follows.

let numberOfDonuts = 34

let favePhrase = "Hello World"
console.log(numberOfDonuts)
console.log(favePhrase)


// Pascal case is similar to camel case.

// The only difference between the two is that pascal case requires the first letter of the first word to also be capitalized.

// let NumberOfDonuts = 34

// let FavePhrase = "Hello World"


