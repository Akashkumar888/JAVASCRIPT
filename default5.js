

function sayname(fname,lname=fname.toUpperCase()){
    console.log("My name is: ",fname , lname);
    }
    
sayname("akash","kumar");

sayname("akash");

function sayname1(fname=lname.toUpperCase(),lname){
    console.log("My name is: ",fname , lname);
    }

 sayname1("akash");
 

 function solve(value={age:15,wt:90,ht:190}){
    console.log("Hii",value); 
 }
 solve();

 function solve12(value=["akash",12,false,34.01]){
    console.log("Hii",value); 
 }
 solve12();

 function solve13(value){
    console.log("Hii",value); 
 }
 solve13(null);
 solve13(undefined);
 

