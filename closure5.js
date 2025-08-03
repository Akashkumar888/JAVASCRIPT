

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

outer(); // 'outer' is called once, returns 'inner'



// But you're not invoking the returned function (inner), so console.log(counter) inside inner() never runs.