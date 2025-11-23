
// ⭐ 95. What is the Default Case in Switch?

// The default case runs when none of the case values match.

// ✔ Example:
let x = 5;

switch (x) {
  case 1:
    console.log("One");
    break;
  default:
    console.log("Not matched"); // Runs
}

// ⭐ Interview Answer

// The default case in a switch statement executes when no matching case is found.