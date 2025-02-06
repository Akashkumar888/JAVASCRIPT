
function getAge(){
    return 21;
}

function utility(fullname,age=getAge()){
console.log(fullname," ",age);
}

utility("akash",32);
utility("kumar");

