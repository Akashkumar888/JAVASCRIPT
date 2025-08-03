
function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

const count = outer(); // 'outer' is called once, returns 'inner'
count(); // 1
count(); // 2
count(); // 3



