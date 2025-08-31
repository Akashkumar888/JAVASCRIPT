

console.log("Hii"); // synchronous run code 

function fetchData(){
  return new Promise(resolve=>{
    setTimeout(()=>resolve("kumar"),2000)
  })
}

async function getData() {
  let data=await fetchData(); // asynchronous run code 
  console.log(data);
}
getData();


console.log("Akash"); // synchronous run code 

