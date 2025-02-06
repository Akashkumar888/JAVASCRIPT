

// const t1=performance.now();

// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent='This is para ' + i ;
//     document.body.appendChild(para);
// }

// const t2=performance.now();

// console.log('total time by code 1: ' + (t2-t1));


// const t3=performance.now();

// let mydiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent='This is para ' + i ;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);


// const t4=performance.now();
// console.log('total time by code 2: ' + (t4-t3));



//bast code

let fragement=document.createDocumentFragment();

for(let i=1;i<=100;i++){
   let para=document.createElement('p');
   para.textContent='This is para: ' + i;
   // no reflow and no repaint 
   fragement.appendChild(para);
}
// 1 reflow 2 repaint 
document.body.appendChild(fragement);

