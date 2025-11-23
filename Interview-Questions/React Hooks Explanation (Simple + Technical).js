
// ⭐ 5. React Hooks Explanation (Simple + Technical)
// React Hooks allow functional components to use features like state, lifecycle methods, context, and references without using classes.
// ⭐ useState
// ✔ What it does
// Stores values inside a component
// Allows updating those values
// Triggers re-render when updated

// ✔ Syntax
const [count, setCount] = useState(0);

// ✔ How it works
// count → current value
// setCount → function to update value
// When setCount runs, React re-renders the component
// ✔ Example
setCount(count + 1);

// ⭐ useEffect
// ✔ What it does
// Runs side effects such as:
// API calls
// Updating DOM
// Timers
// Subscriptions
// Cleanup functions

// ✔ Syntax
useEffect(() => {
  console.log("Mounted or count changed");
}, [count]);

// ✔ How dependency array works
// [] → runs only once (on mount)
// [value] → runs whenever value changes
// No dependency → runs after every render

// ⭐ useContext
// ✔ What it does
// Lets you share data between components without passing props manually through each level.

// ✔ Create Context
import { createContext } from "react";
export const AppContext = createContext();

// ✔ Create Provider
const AppContextProvider = ({ children }) => {
 const value = {
    data: "Akash Kumar",         // Example dynamic data
    age: 21,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;


// main.jsx or App.jsx
import AppContextProvider from "./context/AppContextProvider";

<AppContextProvider>
    <App />
</AppContextProvider>


// ✔ Use in Any Component
import { useContext } from "react";
import AppContext from "../context/AppContext";

const MyComponent = () => {
  const { data } = useContext(AppContext);

  return <h1>{data}</h1>;
};

export default MyComponent;


// ⭐ useRef
// ✔ What it does

// Stores mutable values that do NOT cause re-render
// Accesses DOM elements directly
// Stores timers, previous values, or any persistent data

// ✔ Example
const inputRef = useRef();
// ✔ Attach to DOM
<input ref={inputRef} />

// ✔ Use it
inputRef.current.focus();


// ➡ Here, inputRef.current gives direct access to the HTML input element.
// ⭐ Summary (One-Line for Interview)
// useState → manages component state
// useEffect → handles side effects and lifecycle events
// useContext → global state without props
// useRef → stores mutable values and accesses DOM elements
