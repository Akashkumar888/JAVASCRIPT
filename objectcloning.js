
let akash={
    age:21,
    wt:51,
    ht:180
};

let vikash=akash;
akash.wt=56;
console.log("akash:", akash);
console.log("vikash:", vikash);


let src={
    age:21,
    wt:51,
    ht:180
};


// clone 
let dest={...src};

src.age=42;

console.log("source:",src);
console.log("dest:", dest);

