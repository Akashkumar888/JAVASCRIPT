

function returnFunc(){
  let a=1;
  console.log(a);
  const x=()=>{
    console.log(a);
    const y=()=>{
      console.log(a);
      const z=()=>{
        console.log(a);
      }
      a=1234;
      z();
    }
    a=999;
    y();
  }
  a=560;
  x();
  return x;
}

const value=returnFunc;
value();

