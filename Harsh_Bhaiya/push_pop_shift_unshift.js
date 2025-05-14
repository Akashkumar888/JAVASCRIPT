var arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(arr);        // [1, 2, 3, 4, 5, 6, 7, 8]

arr.push(10);            // Adds 10 at the END
console.log(arr);        // [1, 2, 3, 4, 5, 6, 7, 8, 10]

arr.pop();               // Removes LAST element (10)
console.log(arr);        // [1, 2, 3, 4, 5, 6, 7, 8]

arr.shift();             // Removes FIRST element (1) just shift()
console.log(arr);        // [2, 3, 4, 5, 6, 7, 8]

arr.unshift(2);          // Adds 2 at the BEGINNING
console.log(arr);        // [2, 2, 3, 4, 5, 6, 7, 8]


