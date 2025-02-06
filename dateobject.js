
// The string 2024-10-25T18:36:59.605Z represents a timestamp in ISO 8601 format, which is a standardized way to express date and time. Here's a breakdown of the components:

// 2024-10-25: The date portion, representing 25th October 2024.
// T: The "T" separates the date and time portions.
// 18:36:59.605: The time portion, representing 18 hours, 36 minutes, and 59.605 seconds (in 24-hour format).
// Z: Indicates that the time is in UTC (Coordinated Universal Time). The "Z" stands for "Zulu time," which is another name for UTC.
// So, this timestamp is referring to 25th October 2024, at 18:36:59.605 UTC.

let curr=new Date();

console.log(curr);

let date=new Date('June 20 1998 07:15');

console.log(date);

let newdate=new Date(2003,6,13,4);

console.log(newdate);

console.log(newdate.getDate());
console.log(newdate.getFullYear());


