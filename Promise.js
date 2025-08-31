
// A Promise represents a value that will be available in the future (either resolved or rejected).

// 📌 States of a Promise:

// Pending → initial state.

// Resolved (fulfilled) → success.

// Rejected → failure.

// 📌 Example:

let promise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Task completed");
    else reject("Error occurred");
  }, 1000);
});

promise
  .then(result => console.log(result))  // if resolved
  .catch(error => console.error(error)) // if rejected
  .finally(() => console.log("Done!"));



  let akash = new Promise((resolve, reject) => {
  let success = false;
  setTimeout(() => {
    if (success) resolve("My name is Akash kumar");
    else reject("Error occurred");
  }, 1000);
});

akash
  .then(result => console.log(result))  // if resolved
  .catch(error => console.error(error)) // if rejected
  .finally(() => console.log("Done!"));

  