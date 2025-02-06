
let s="raghav garg";
console.log(s,s.length);

console.log(s[4]);
for(let i=0;i<s.length;i++){
    console.log(s[i]);
}

// forof loop 
for (const it of s) {
    console.log(it);
}
// for each loop does not work in strings 


// foreach loop
Array.from(s).forEach((ele,i) => {
    console.log(ele,i);
});
