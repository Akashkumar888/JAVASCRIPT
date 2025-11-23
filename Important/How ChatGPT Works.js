
// ⭐ 7. How ChatGPT Works? (Not RNN or CNN)
// ChatGPT does NOT use RNNs or CNNs.
// It is built using a modern architecture called Transformers, which replaced old neural network models for language tasks.

// ⭐ ChatGPT Uses Transformer Architecture
// ✔ Transformer is the model type used in GPT
// GPT-1, GPT-2, GPT-3, GPT-4 → Decoder-only Transformers
// BERT → Encoder-only Transformer
// Transformers understand long sequences using self-attention, not recurrence.

// ⭐ Why ChatGPT Does NOT Use RNN?
// RNNs process text one token at a time, which is slow
// RNNs struggle with long-term memory
// They face the vanishing gradient problem
// They cannot read long text efficiently
// Cannot parallelize training
// Transformers fix all these issues.

// ⭐ Why ChatGPT Does NOT Use CNN?
// CNNs are great for images, not long sequences
// They work on local patterns, not long-range relationships
// Hard to handle long texts like paragraphs and conversations
// Transformers can attend to any word in the sequence efficiently.

// ⭐ ChatGPT Architecture Explained
// ✔ 1. Transformer Model
// Uses self-attention, which allows the model to look at all words at once
// Learns which words relate to each other
// Makes understanding context much better than RNNs

// ✔ 2. Pretraining Stage
// ChatGPT is trained on massive datasets:
// Internet text
// Books
// Scientific papers
// Code
// Articles
// Public datasets
// ✔ Objective during pretraining:
// Predict the next word/token.
// Example:
// Input:
// The capital of France is
// Model tries to predict:
// Paris
// This phase teaches the model:
// grammar
// facts
// reasoning
// world knowledge
// programming patterns

// ✔ 3. Fine-Tuning (RLHF — Reinforcement Learning from Human Feedback)
// After pretraining, the model is improved using human feedback:
// Humans rank responses
// AI learns which answers are better
// Safety rules and alignment added
// Produces helpful & safer outputs
// This stage makes ChatGPT:
// conversational
// polite
// helpful
// aligned with human expectations

// ✔ 4. Inference (During Chat)
// When you type a message:
// Your text is converted into tokens
// Tokens enter the Transformer model
// Model predicts the next token again and again
// Tokens are converted back to text
// This happens extremely fast → feels like the model is “thinking.”
// ⭐ One-Line Interview Answer
// ChatGPT works using Transformer architecture with self-attention, trained on huge datasets, fine-tuned with human feedback (RLHF), and during inference it predicts the next token repeatedly to generate the final response.
