
let src={
    age:21,
    wt:51,
    ht:180
};

let dest={};

for (let key in src){
    let newKey=key;
    let newVal=src[key];

    dest[newKey]=newVal;
}

src.age=23;
console.log("source: ",src);
console.log("dest:", dest);
