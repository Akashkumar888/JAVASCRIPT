
// ⭐ 2. Frontend Framework vs Frontend Library
// ✔ Frontend

// Everything the user sees and interacts with:
// HTML + CSS + JavaScript

// ⭐ Frontend Library
// 📌 Examples: React, jQuery, Chart.js, D3.js
// A library provides tools or functions you can use anywhere inside your project, but you control the overall structure.
// ✔ Characteristics of a Library
// Helps you build UI components
// You decide project structure
// More flexible
// Lightweight
// Developer chooses routing, architecture, state management, etc.
// You call the library → Inversion of control stays with the developer
// ✔ Library Example: React

function App() {
  return <h1>Hello Akash</h1>;
}

// React helps render UI, but you must manage:
// Routing
// File organization
// State architecture (Redux/Context)
// ⭐ Frontend Framework
// 📌 Examples: Angular, Vue.js, Next.js, SvelteKit
// A framework gives a full structure for building apps.
// It tells you how your project should be built.

// ✔ Characteristics of a Framework
// Full application architecture
// Includes routing, state management, file structure
// More opinionated (less flexibility)
// All features built-in
// Framework calls your code → Inversion of control is flipped
// ✔ Framework Example: Angular
// Has built-in router
// Built-in services
// Strict folder structure
// CLI commands to generate features

// ⭐ Short Comparison Table
Feature	                                          Library	                                                             Framework
Control	                                          Developer controls	                                                 Framework controls
Flexibility	                                      High	                                                               Medium/Low
Routing	                                          You add	                                                             Built-in
File Structure	                                  Your choice	                                                         Predefined
Learning Curve	                                   Easier	                                                             Harder
Examples	                                         React, jQuery	                                                     Angular, Vue, Next.js

// ⭐ One-Line Interview Answer
// A frontend library gives tools to build UI but leaves structure to the developer, while a frontend framework provides a complete architecture with built-in routing, state handling, and project structure.