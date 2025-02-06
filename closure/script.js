


// let name='Surya Pratap Singh';
// function outerfunction() {
//     let name = "Akash kumar"; // name is a local variable created by init
//     function innerfunction() {
//       // displayName() is the inner function, that forms a closure
//       //let name="Ankit";
//       console.log(name); // use variable declared in the parent function
//     }
//     innerfunction();
//   }
//   outerfunction();



function outerfunction() {
    let name = "Akash kumar"; 
    function innerfunction() {
      console.log(name); 
    }
    return innerfunction; // Return the function reference, not the result of calling it
  }
  
  let inner = outerfunction(); // `inner` is now a reference to `innerfunction`
  inner(); // Now call `innerfunction`
  


  