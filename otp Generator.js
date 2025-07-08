

function generate4DigitOTP (){
 return  Math.floor(1000 + Math.random() * 9000);
} 

// 1. Math.random()
// Returns a random decimal between 0 (inclusive) and 1 (exclusive).
// Example: 0.7384
// 2. Math.random() * 9000
// Multiplies the decimal by 9000 → gets a number between 0 and 8999.999...
// Example: 0.7384 * 9000 = 6645.6
// 3. 1000 + ...
// Adds 1000 to shift the range → now it's between 1000 and 9999.999...
// Example: 6645.6 + 1000 = 7645.6
// 4. Math.floor(...)
// Removes decimal part, giving you an integer between 1000 and 9999 (inclusive).
// Example: Math.floor(7645.6) = 7645


console.log("4-digit OTP:", generate4DigitOTP());


function generate6DigitOTP(){
  return Math.floor(100000 + Math.random() * 900000);
}

console.log("6-digit OTP:", generate6DigitOTP());





const generateOTP = (length) => {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log("4-digit OTP:", generateOTP(4));
console.log("6-digit OTP:", generateOTP(6));

