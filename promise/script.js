

// let firstpromise=new Promise( (resolve,reject)=>{
//     console.log("akash kumar");
//     resolve(1001);
// })


// let firstpromise=new Promise( (resolve,reject)=>{
//     setTimeout(function myName(){
//         console.log("akash kumar");
//     }
//     ,15000);
//     resolve(1);
// })
    

// let promise1=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Promise fullfilled")
//     }
//     else{
//         reject("promise reject");
//     }

// })


// promise1.then((message)=>{
//      console.log("Then ka message is: " + message);
// }).catch((error)=>{
//     console.log("Error:"+ error);
// })


let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'First');
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Second');
})

let promise3=new Promise((resolve,reject)=>{
    setTimeout(reject,4000,'Third');
})

// if one have error then all promise.all are error 

Promise.all([promise3,promise2,promise1])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error);
})