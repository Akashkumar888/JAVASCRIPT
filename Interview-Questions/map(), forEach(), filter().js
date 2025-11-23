
// ⭐ 20. Difference Between map(), forEach(), filter()
// ✔ forEach()
// Loops through array
// Does NOT return new array
// Cannot chain

[1,2,3].forEach(x => console.log(x));

// ✔ map()
// Returns a new array
// Used for transformations

const res = [1,2,3].map(x => x * 2);
console.log(res); // [2,4,6]

// ✔ filter()
// Returns a new array based on condition

const res = [1,2,3,4].filter(x => x % 2 === 0);
console.log(res); // [2,4]

// ⭐ Interview Summary:
// • forEach → loop, no return
// • map → transforms array, returns new array
// • filter → keeps items based on condition