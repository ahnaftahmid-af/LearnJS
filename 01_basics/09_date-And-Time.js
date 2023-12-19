// let myDate = new Date();

// console.log(myDate.toString()); // Expected output: Mon Dec 18 2023 13:32:34 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Expected output: Mon Dec 18 2023

// console.log(myDate.toLocaleString()); // Expected output: 12/18/2023, 1:37:43 PM

// console.log(myDate.toLocaleDateString()); // Expected output: 12/18/2023

// console.log(myDate.toISOString()); // Expected output: 2023-12-18T13:37:43.429Z

// console.log(myDate.toLocaleTimeString()); // Expected output: 1:37:43 PM

// console.log(myDate.toTimeString()); // Expected output: 13:37:43 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.getTimezoneOffset()); // Expected output: 0

let newDate = new Date(2024, 0, 1);
console.log(newDate.toDateString()); // Expected output: Mon Jan 01 2024

let newDateAndTime = new Date(2024, 0, 1, 7, 49);
console.log(newDateAndTime.toLocaleString()); // Expected output: 1/1/2024, 7:49:00 AM

let dateStyle = new Date("2024-01-03"); // YYYY-MM-DD
console.log(dateStyle.toLocaleString()); // Expected output: 1/3/2024, 12:00:00 AM

let dateNewFormatte = new Date("03-01-2024"); // DD-MM-YYYY
console.log(dateNewFormatte.toLocaleString()); // Expected output: 3/1/2024, 12:00:00 AM
