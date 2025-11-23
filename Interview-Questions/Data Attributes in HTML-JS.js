
// ⭐ 40. What are Data Attributes in HTML/JS?
// HTML elements can store extra information using data-* attributes.

// ✔ HTML:
<button id="btn" data-user="Akash" data-id="101">Click</button>

// ✔ Access in JavaScript:
const btn = document.getElementById("btn");
console.log(btn.dataset.user); // "Akash"
console.log(btn.dataset.id);   // "101"

// ⭐ Interview Answer
// Data attributes allow embedding custom data into HTML elements using the data-* syntax, accessible via element.dataset.