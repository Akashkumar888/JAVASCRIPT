function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);

    function small() {
      counter++;
      console.log(counter);
    }

    return small; // return small from inner
  }

  return inner; // outer returns inner
}

const count = outer(); // outer() returns inner()
const callSmall = count(); // inner() is called, counter = 1, returns small
callSmall(); // small() is called, counter = 2

