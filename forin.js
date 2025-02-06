
let xyz={
    "name":"Raghav",
    "nich name":"Raghu",
    "age":24,
    "percentage":92.5,
    "isMarried":false
    };
 // forin loop   
// for (const key in xyz) {
//     if (Object.prototype.hasOwnProperty.call(xyz, key)) {
//         console.log(key,xyz[key]);
//     }
// }  

// for in loop me in 
for (const key in xyz) {
    console.log(key,xyz[key]);
}
