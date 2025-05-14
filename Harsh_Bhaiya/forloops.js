var arr = [1,2,3,4,5,6,7,8,9,10];

// Traditional for loop
for (var i = 0; i < arr.length; i++) {
  console.log("for loop:", arr[i]);
}

for (const value of arr) {
  console.log("for...of loop:", value);
}

for (const index in arr) {
  console.log("for...in loop (indexes):", index, "-> value:", arr[index]);
}

arr.forEach(function(element, index) {
  console.log("forEach loop:", index, "->", element);
});


let squared = arr.map(function(num) {
  return num * num;
});
console.log("map() output (squares):", squared);

