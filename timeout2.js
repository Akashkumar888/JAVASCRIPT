


// print 1 to 12 but with delay of 1 sec after each number gets printed


for(let i=12;i>=1;i--){
    setTimeout(function (){
        console.log(i);
    },(500*(13-i)));
}

