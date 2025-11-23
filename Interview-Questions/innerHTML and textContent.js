
// ⭐ 49. Difference Between innerHTML and textContent?
// ✔ innerHTML
// Returns HTML + text
// Parses HTML
// Can insert tags
// Can cause XSS risk
element.innerHTML = "<b>Hello</b>";

// ✔ textContent
// Returns only text
// Does NOT parse HTML
// Fast and safe

element.textContent = "<b>Hello</b>"; // shows literally

// ⭐ Summary
// innerHTML → parses HTML
// textContent → plain text only