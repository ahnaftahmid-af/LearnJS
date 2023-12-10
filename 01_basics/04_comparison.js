console.log("2" > 5)    // Expected output: false
console.log(2 > 5)      // Expected output: false
console.log("2" > "5")  // Expected output: false

console.log(2 > 5)      // Expected output: false
console.log(2 < 5)      // Expected output: true
console.log(2 <= 5)     // Expected output: true
console.log(2 >= 5)     // Expected output: false
console.log(2 == 5)     // Expected output: false
console.log(2 != 5)     // Expected output: true


//The reason is that an equality '==' and comparisons '<, >, <=, >=' work diffently. 

console.log(null > 0);      // Expected output: false 
console.log(null == 0);     // Expected output: false
console.log(null >= 0);     // Expected output: true


// Note==============================
// Comparisons convert null to a number, treating it as 0, 
// that's why (3) null >= 0 is true ans (1) null > 0 is false.

// Strict equality (===) 

console.log(1 === 1);   // Expected output: true

console.log("Hello" === "Hello");   // Expected output: true

console.log("1" === 1);    // Expected output: false

console.log(0 === false);   // Expected output: false

// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
