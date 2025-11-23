
// ⭐ 38. What is Debouncing?
// Debouncing ensures a function runs only AFTER a delay, and if the event is triggered again within that delay, the timer resets.
// Used in:
// Search bar
// Resize events
// Input validation

// ✔ Example:
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const search = debounce(() => {
  console.log("Searching...");
}, 500);

// ⭐ Interview Answer
// Debouncing ensures a function runs only after a specific delay of inactivity.