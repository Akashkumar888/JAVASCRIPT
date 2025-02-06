

// async function getdata(){
//     setTimeout(function(){
//         console.log("I am inside settime out block");
//     },3000);
// }

// let output=getdata();


// async function getdata(){
//     // async me hi await lagta hai 
//    let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    let data=await response.json();// ye bhi asynchronous

//    console.log(data);

// }

// getdata();


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";  // corrected URL

const options={
    method: "POST",
    body: JSON.stringify({ username: "Akash kumar" }),
    headers: myHeaders,
  };

  async function getData(){
    const response=await fetch(url);
    let data=await response.json();
    console.log("My get data response: "  ,data);
}


  async function postData(){
      const response=await fetch(url,options);
      let data=await response.json();
      console.log("My postdata response: "  ,data);
  }
  

  async function processData(){
     await postData();
     await getData();

  }

processData();

