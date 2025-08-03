
function returnFunc() {
  let a = 1;
  console.log(a); // Line A

  const x = () => {
    console.log(a); // Line B

    const y = () => {
      console.log(a); // Line C

      const z = () => {
        console.log(a); // Line D
      }

      a = 1234;
      z();
    }

    a = 999;
    y();
  }

  a = 560;
  x();

  return x;
}

const value = returnFunc();
value();

// Closures: The inner functions x, y, z keep access to variable a from the outer scope.
// Variable a is not re-declared; it is updated and the same reference is shared across all inner functions.

