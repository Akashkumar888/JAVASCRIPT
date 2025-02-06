
// print 1 to 10 but with delay of 1 sec after each number gets printed


for(let i=1;i<=10;i++){
    setTimeout(function (){
        console.log(i);
    },i*1000);
}
