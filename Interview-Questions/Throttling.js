
// ⭐ 39. What is Throttling?
// Throttling ensures a function runs at most once every X milliseconds.
// Used in:
// Scroll events
// Window resize
// Mouse movement

// ✔ Example:
function throttle(fn, limit) {
  let inThrottle = false;

  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ⭐ Interview Summary
// Debounce → wait until user stops
// Throttle → run at fixed intervals