

let paras=document.querySelectorAll('p');

function alertPara(event){
    if(event.target.nodeName==='SPAN'){
        alert("you have clicked on para: " + event.target.textContent );
    }
}


// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     console.log("eventListnerAdded");
//     para.addEventListener('click',alertPara)
// }

let myDiv=document.getElementById("wrapper");

myDiv.addEventListener('click',alertPara);

