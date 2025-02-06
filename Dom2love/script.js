
let mydiv=document.querySelector('#mydiv');

let newElement=document.createElement("span");

newElement.textContent="This is me Akash kumar";

console.log(newElement);

// mydiv.insertAdjacentElement('beforebegin',newElement);

// mydiv.insertAdjacentElement('beforeend',newElement);

// mydiv.insertAdjacentElement('afterbegin',newElement);

mydiv.insertAdjacentElement('afterend',newElement);

// let parent=document.querySelector('#mydiv');

// let child=document.querySelector("#fpara");

// parent.removeChild(child);

