
let src={
    age:21,
    wt:51,
    ht:180
};

let src2={
    val:23,
    fullname:"akash kumar"
};

// clone 
let dest=Object.assign({},src,src2);

src.age=42;

console.log("source:",src);
console.log("dest:", dest);