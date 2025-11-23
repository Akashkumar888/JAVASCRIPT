
// ⭐ 42. How to handle errors in JavaScript?
// ✔ Using try...catch
try {
  console.log(x);  // ERROR
} catch (err) {
  console.log("Error handled:", err.message);
}

// ✔ try...catch...finally
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err);
} finally {
  console.log("Always runs");
}

// ✔ Using Promises
fetch("url")
  .then(res => res.json())
  .catch(err => console.log("Error:", err));

// ✔ async/await + try/catch
async function load() {
  try {
    let data = await fetch("url");
  } catch (err) {
    console.log("Error:", err);
  }
}
