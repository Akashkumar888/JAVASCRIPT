

if (!false) console.log('false is falsy');
if (!0) console.log('0 is falsy');
if (!"") console.log('empty string is falsy');
if (!null) console.log('null is falsy');
if (!undefined) console.log('undefined is falsy');
if (!NaN) console.log('NaN is falsy');


// it working on browser only 
// console.log(typeof document.all); // 'undefined'
// console.log(document.all == undefined); // true
// console.log(Boolean(document.all)); // false

