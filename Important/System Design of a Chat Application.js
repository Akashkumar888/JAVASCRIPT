
// ⭐ 6. System Design of a Chat Application (WhatsApp / Messenger Level)
// Designing a chat app requires handling real-time communication, scaling, message storage, and delivery guarantees.
// Below is the entire system explained line-by-line.

// ⭐ Main Components of a Chat Application
// ✔ 1. Client (Frontend UI)
// The user interface built with React, Flutter, or Android/iOS.
// Handles chat screen, message input, typing indicator, notifications, etc.

// ✔ 2. API Server (Backend)
// Built using Node.js, Django, Spring Boot, etc.
// Used for login, signup, profile update, chat list, media upload, etc.

// ✔ 3. WebSocket Server (Real-Time Communication)
// Handles instant message delivery.
// Usually implemented with Socket.io, WebSockets API, or MQTT.

// ✔ 4. Database Layer
// Different data stored in different databases:
// Messages database → MongoDB
// (Because Mongo handles unstructured chat data well)
// User database → MySQL / PostgreSQL
// (Because relational DB suits user profile, contacts, relations)

// ✔ 5. Caching Layer (Redis)
// Stores online users, active sessions, last seen, pending messages.
// Improves performance and reduces database load.

// ✔ 6. Load Balancer
// Distributes traffic across multiple servers.
// Prevents any single server from getting overloaded.

// ✔ 7. Message Queue (Kafka / RabbitMQ)
// Ensures no message is lost even if servers fail.
// Helps process message delivery in background.

// ✔ 8. Notification Service (FCM / APNs)
// Sends push notifications when user is offline.
// Example: Firebase Cloud Messaging.
// ⭐ How a Chat Message Flows Through the System
// 🔹 Step 1: User Connects via WebSocket
// The client creates a WebSocket or Socket.io connection to the server.
// The user becomes “online” and stored in Redis.
// 🔹 Step 2: User Sends a Message
// When user sends a message:
// The message is sent to the WebSocket Server.
// The server pushes the message to the Message Queue (Kafka / RabbitMQ).
// The message is stored in the Messages Database (MongoDB).
// The message is forwarded instantly to the receiver (if they are online).
// If the receiver is offline, the message is stored and push notification is sent.
// ⭐ Message Delivery States
// Chat apps track message states:
// Sent → message reached server
// Delivered → message reached receiver’s device
// Seen → receiver opened the chat window
// These states are stored in the database and updated in real time.
// ⭐ Scaling the Chat System
// To handle millions of users:
// Multiple WebSocket servers run simultaneously
// A load balancer distributes users among these servers
// Redis pub/sub or Kafka is used to sync messages across servers
// Horizontal scaling (adding more servers) handles traffic efficiently
// ⭐ Summary (One-Line Interview Answer)
// “A chat application uses WebSockets for real-time messaging, stores messages in a scalable database like MongoDB, uses Redis for caching online users, relies on a message queue like Kafka for reliability, and uses load balancers + multiple WebSocket servers to handle millions of users.”
