
// ⭐ 13. What is Event Bubbling and Capturing?

// When an event occurs (like clicking a button):
// ✔ Capturing phase (top → down)
// document → body → div → button
// ✔ Bubbling phase (bottom → up)
// button → div → body → document

// Example:
button.addEventListener("click", handler, true);  // capturing
button.addEventListener("click", handler, false); // bubbling (default)
// ⭐ Interview Answer
// Capturing travels from parent to target; bubbling travels from target back to parent.
