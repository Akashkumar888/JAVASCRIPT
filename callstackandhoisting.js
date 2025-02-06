
// In JavaScript, hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.

// Here are some things to know about hoisting in JavaScript: 
// Hoistable declarations:=> The ECMAScript specification defines a group of declarations as HoistableDeclaration, including function declarations, async function declarations, and more. 
// Hoisting only declarations:=> JavaScript only hoists declarations, not initializations. 
// Hoisting and default values: When a variable is hoisted, it is assigned a default value of undefined. 
// Hoisting and const and let:=> Variables defined with const and let are not hoisted. This is because of how const and let work. 
// Hoisting and the temporal dead zone:=> When a let or const variable is accessed before its declaration, a ReferenceError is thrown. This is because of the temporal dead zone (TDZ), which starts at the beginning of the variable's enclosing scope and ends when it is declared. 


Myname("Akash kumar");

function Myname(fullname){
    console.log(fullname);
}

