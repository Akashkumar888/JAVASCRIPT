
// ⭐ API vs REST API (Simple, Medium & Interview-Level Explanation)
// ⭐ 1. What is an API? (General Explanation)

// An API (Application Programming Interface) is a communication bridge that allows two software systems to talk to each other.
// An API is like a messenger that carries data between:
// App ↔ Server
// Frontend ↔ Backend
// App ↔ Database
// Mobile app ↔ Cloud
// App ↔ External services (Paytm, Maps, YouTube API)
// You can think of it like this:
// “You book a flight on an app → the app sends data to a server → server sends back ticket details.”
// This communication happens through an API.

// An API is a broad concept and includes many types like:
// SOAP API
// RPC API
// GraphQL API
// REST API
// WebSocket API
// REST is only one specific category of API.

// ⭐ 2. What is a REST API?
// REST stands for Representational State Transfer.
// It is a set of rules and architecture style used to build APIs that work over the HTTP protocol.
// In REST, communication works like this:
// The client sends an HTTP request
// The server sends an HTTP response
// REST uses standard HTTP operations:
// GET → Read data
// POST → Create data
// PUT → Update data
// DELETE → Delete data
// REST APIs are always stateless, meaning the server does not remember client information between requests.
// REST API is a subset of API.
// All REST APIs are APIs, but not all APIs are REST APIs.

// ⭐ 3. Key Differences (Explained Without Table)
// An API is any interface that allows applications to communicate. It can use any protocol such as HTTP, TCP, SMTP, or WebSocket.
// A REST API is specifically built using HTTP and must follow REST design principles.
// APIs can return any format (XML, binary, text), while REST APIs commonly use JSON.
// APIs can be stateful or stateless, but REST APIs must always be stateless.
// APIs don’t follow strict rules, but REST requires certain constraints such as statelessness, caching, and uniform interface.
// REST APIs are usually faster because they use caching and simple HTTP methods.

// ⭐ 4. REST API Must Follow These Six Principles
// ✔ Stateless
// The server does not store client session information. Every request must contain all needed details.
// ✔ Client–Server Separation
// Frontend and backend are independent. They only communicate via REST calls.
// ✔ Cacheable
// Responses can be cached to improve performance.
// ✔ Uniform Interface
// Standard structure for URLs and request methods must be followed.
// ✔ Layered System
// Requests may travel through multiple layers such as load balancer, cache, API gateway.
// ✔ Code on Demand (Optional)
// Server can send executable code (like JavaScript) to the client.

// ⭐ 5. REST API Example (Real & Simple)
// ✔ GET Request
// Request:
GET /users
// Response:

[
  { "id": 1, "name": "Akash" },
  { "id": 2, "name": "Rahul" }
]

// ✔ POST Request
POST /users
// Body:
{
  "name": "Akash"
}

// ✔ PUT Request
PUT /users/1

✔ DELETE Request
DELETE /users/1


// These are standard REST API operations.

// ⭐ 6. Simple Example: API vs REST API
// ✔ Normal API Example (Not REST)

// A C++ program calling a library function:
sqrt(25);

// This is an API, but NOT REST.
// ✔ REST API Example
// A frontend calls a backend using HTTP:

fetch("https://api.github.com/users/akash")
  .then(res => res.json())
  .then(data => console.log(data));


// Since this uses HTTP + JSON + REST endpoints → this is a REST API.
// ⭐ 7. REST API is Not the Only API on the Web
// There are other modern API technologies:
// GraphQL API → Used by GitHub; gives exactly the data you request
// WebSocket API → Used in chat apps; real-time two-way communication
// SOAP API → Used in banking; XML-based and strict
// gRPC API → Used in microservices; super-fast and binary format
// REST is just one option.

// ⭐ 8. Interview Answer (Use This in Real Interviews)
// An API is any interface allowing software systems to communicate, while a REST API is a specific type of API built using HTTP and following REST principles such as statelessness, caching, and uniform interface. Every REST API is an API, but not every API is REST.
// ⭐ 9. Bonus: REST API in Node.js
const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "Hello Akash" });
});

app.listen(3000);

// ⭐ 10. Final One-Line Conclusion
// API is a general concept. REST API is a special type of web API that follows REST architectural rules.