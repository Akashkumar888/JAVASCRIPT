
// Simulated API call
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  let data = await fetchData(); // wait for promise
  console.log(data);
}

getData();
// Output:
// Fetching...
// (2s delay)
// Data received

// "Fetching..." is printed immediately.
// At await fetchData():
// JS calls fetchData() which returns a Promise.
// await tells the function: “pause here until this Promise is resolved”.
// The rest of the function (console.log(data)) will not run until the promise resolves.
// After 2 seconds, resolve("Data received") is executed.
// Execution resumes, and "Data received" is printed.
