
// ⭐ 6. What is the DOM? (Full Correct Explanation)
// Answer:
// The DOM (Document Object Model) is a programming interface that represents an HTML or XML document as a tree structure of nodes.
// It allows JavaScript to access, traverse, and modify elements, attributes, styles, and content dynamically.

// ⭐ Key Points (Perfect for Exams & Interviews)
// DOM = Document Object Model
// Browser converts HTML into a tree of objects (nodes)
// JavaScript can use DOM to add, delete, modify elements
// DOM updates → webpage updates without reloading
// DOM is essential for interactive and dynamic web pages

// ⭐ Example: HTML → DOM Tree
// HTML:
<h1>Hello</h1>
<p>Welcome</p>

// DOM Tree:
// Document
//  └── html
//       └── body
//            ├── h1
//            └── p

// ⭐ JavaScript DOM Manipulation Examples
document.querySelector("h1").style.color = "red";
document.getElementById("title").innerText = "Updated Heading";

// These code lines modify the DOM, so the webpage updates instantly.
// ⭐ Why the DOM Is Important?
// Handles user interactions
// Updates UI dynamically
// Used for form validation
// Enables animations
// Allows modifying web content without refreshing the page
// Makes webpages interactive
// ⭐ One-Line Interview Answer
// The DOM is a tree representation of an HTML document that allows JavaScript to read, access, and modify elements dynamically.
