


function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

outer()(); // 'outer' is called once, returns 'inner'


// outer() returns inner, so outer()() means: call outer, get inner, then call inner.


