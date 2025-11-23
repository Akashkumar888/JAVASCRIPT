
// ⭐ 3. Backend Framework vs Backend Library
// ✔ Backend
// The backend handles:
// Server logic
// APIs
// Databases
// Authentication
// Authorization
// Business logic
// It runs on the server (Node.js, Python, Java, PHP, Go, etc.)
// ⭐ Backend Library
// 📌 Examples:
// Express.js → HTTP server library
// Mongoose → MongoDB ODM
// Sequelize → SQL ORM
// bcrypt → password hashing
// jsonwebtoken → token handling
// A library provides specific features you call when needed.
// ✔ Characteristics of a Backend Library
// Provides helper functions
// You choose the architecture
// You organize your files
// You add routing, validation, DB setup manually
// Lightweight & flexible
// You control everything

// ✔ Example (Express as a Library)
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Backend!");
});


// You write:
// structure
// routing
// authentication
// middleware
// ⭐ Backend Framework
// 📌 Examples:
// Node.js + Express (semi framework)
// Django (Python)
// Flask (Python, micro-framework)
// Spring Boot (Java)
// Laravel (PHP)
// Ruby on Rails (Ruby)
// A framework gives a ready-made structure for building backend applications.

// ✔ Characteristics of a Backend Framework
// Built-in routing
// Built-in authentication
// Middleware system
// Database integration
// Project structure already defined
// Provides validators, form handling, security features
// The framework calls your code (inversion of control)

// ⭐ Backend Library vs Backend Framework (Line-by-Line Explanation)
// ✔ A backend library provides small, specific tools or functions that the developer can use wherever needed.
// ✔ A backend framework provides a full structure for building backend applications, including routing, database integration, authentication, and middleware.
// ⭐ Purpose

// A library gives you tools for specific tasks such as making an API call, connecting to a database, hashing passwords, or validating data.

// A framework gives you a complete backend architecture with built-in support for routing, request handling, database management, authentication, validation, and security.

// ⭐ Control

// With a library, the developer controls the entire flow of the application. You decide how to structure your backend, how routing works, and when to call the library functions.

// With a framework, the framework controls most of the flow. It decides how requests are handled and when your code should run. This is called “inversion of control.”

// ⭐ Flexibility

// A library gives high flexibility. You are free to build the project in any structure you prefer.

// A framework offers moderate flexibility. You must follow the rules and structure defined by the framework.

// ⭐ Structure

// With a library, you create your own folder structure, routing pattern, business logic flow, and architecture.

// With a framework, the folder structure and architecture are predefined, and you follow an established pattern to build your application.

// ⭐ Built-in Features

// A library provides only a few built-in tools. Anything additional such as authentication, validation, routing, or database handling must be implemented manually or using extra libraries.

// A framework provides many built-in features such as database ORM, routing, middleware support, user authentication, form validation, security modules, and admin panels.

// ⭐ Examples

// Examples of backend libraries include: Express.js, Mongoose, Sequelize.

// Examples of backend frameworks include: Django, Flask, Spring Boot, Laravel, Ruby on Rails.

// ⭐ One-Line Interview Answer

// A backend library gives small tools you call yourself, while a backend framework gives a complete backend structure with built-in routing, middleware, authentication, and database systems, where the framework controls the overall flow.