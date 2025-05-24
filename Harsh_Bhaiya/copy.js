
var py=12;
var sy=py;
console.log(sy);



var a=[1,2,3,4,5];

var b=[...a];
// spread operator 

console.log(a);
a.pop();
console.log(b);
console.log(a);

var obj={
  name:"akash kumar",
  email:'akashgkr12@gmail.com',
  password:'pass'
};

var obj2={...obj};

obj.name="kumar ankit";
console.log(obj);
console.log(obj2);

