

function change(){
    let fpara=document.getElementById('fpara');
    fpara.textContent='Akash kumar';
}

let fpara=document.getElementById('fpara');


fpara.addEventListener('click',change);

// fpara.removeEventListener('click',change);


function changeText(event){
    event.preventDefault(); // Prevent the default action
    let fanchor = document.getElementById("fanchor");
    fanchor.textContent = 'chai aur code';
}

let fanchor = document.getElementById("fanchor");

fanchor.addEventListener('click', changeText);
