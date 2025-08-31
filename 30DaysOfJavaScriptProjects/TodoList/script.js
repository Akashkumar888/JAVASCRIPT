
// const inputBox=document.getElementById("input-box");
// const addBtn=document.querySelector(".Add");
// const listContainer=document.getElementById("list-container");





// function addTask(){
//   if(inputBox.value===""){
//     alert("You must write something");
//   }
//   else{
//     let li=document.createElement("li");
//     li.innerHTML=inputBox.value;
//     listContainer.appendChild(li);
//     let span=document.createElement("span");
//     span.innerHTML="\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value ="";
//   saveData();
// }

// listContainer?.addEventListener("click",(e)=>{
//  if(e.target.tagName==='LI'){
//   e.target.classList.toggle("checked");
//  }
//  else if(e.target.tagName==='SPAN'){
//   e.target.parentElement.remove();
//  }
//  saveData();
// },false);

// function saveData(){
//   localStorage.setItem("data",listContainer.innerHTML);
// }

// function showData(){
//   listContainer.innerHTML=localStorage.getItem("data");
// }

// showData();








const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // ✅ Add date
    let dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    let now = new Date();
    let formattedDate = now.toLocaleDateString("en-GB", { 
      day: "2-digit", month: "short", year: "numeric" 
    });
    dateSpan.innerText = formattedDate;
    li.appendChild(dateSpan);

    // ❌ cross button
    let span = document.createElement("span");
    span.classList.add("close");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
  saveData();
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showData();

