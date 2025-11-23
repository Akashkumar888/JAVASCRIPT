
// ⭐ 35. What is a Thunk?
// A thunk is a function that delays a computation or wraps an expression inside a function.

// Used in JavaScript + Redux for async operations.

// ✔ Example:
const thunk = () => {
  return 5 + 10;
};

console.log(thunk()); // 15

// ✔ Redux example:
const fetchUsers = () => (dispatch) => {
  fetch("/users")
    .then(res => res.json())
    .then(data => dispatch({ type: "SET_USERS", payload: data }));
};

// ⭐ Interview Answer
// A thunk is a function that delays computation; in Redux it wraps async logic before dispatch.