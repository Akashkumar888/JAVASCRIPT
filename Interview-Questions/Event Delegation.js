
// ⭐ 26. What is Event Delegation?
// Instead of adding event listeners to multiple child elements, you add one listener to the parent, and handle events using event.target.

// ✔ Example:
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.innerText);
  }
});

// ⭐ Benefits
// Better performance
// Fewer event listeners
// Works for dynamically added elements