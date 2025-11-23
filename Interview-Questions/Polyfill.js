
// ⭐ 84. What is a Polyfill?
// A polyfill is custom code that adds missing features to older browsers.
// Used when browser does not support a new JavaScript function.

// ✔ Example: Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) !== -1;
  };
}

// ⭐ Interview Answer
// A polyfill is code that implements newer JavaScript features on older browsers that don’t natively support them.