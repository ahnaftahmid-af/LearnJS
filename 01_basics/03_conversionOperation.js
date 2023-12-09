let score = 33

console.log(typeof score)
console.log(typeof (score))


// I want to convert this string value with the number.  

let age = "99" // front-end/user theke ata value neya hobe 

let valueInNumber = Number(age) // sei value ta ke 'Number()' ar moddhe declear kore number a convert kore seti abr notun variable ar moddhe store kore rakha hoiche

console.log(typeof valueInNumber) // and finally 'console.log' ar maddhome notun variable ta ke output dekha jabe 
output => number 


// Note ============================= 
// "33" => 33
// "123abc" => NaN // Not a number (special type)
// true => 1; false => 0



// I want to convert this number value with the string.

let someNumber = 12345
let valueInString = String(someNumber)
// console.log(typeof valueInString)


// I want to convert this number value with the boolean.

let mainNumber = 7676
let valueInBoolean = Boolean(mainNumber)
// console.log(typeof valueInBoolean)


// Note ===================================================
// 1 => true; 0 => false
// "" => false // value na thakle / empty hole false dekhabe
// "Ahnaf" => true


let numtest = "9911abc"
let convertNumber = Number(numtest)
// console.log(typeof convertNumber) //output => number
// console.log(convertNumber) //output => NaN


let nullCheck = null
let convertNumberNull = Number(nullCheck)
// console.log(typeof convertNumberNull) //output => number
// console.log(convertNumberNull) //output => NaN


let undefinedCheck = undefined
let convertNumberUndefined = Number(undefinedCheck)
// console.log(typeof convertNumberUndefined) //output => NaN
console.log(convertNumberUndefined) //output => NaN


//Operation

console.log(5 + 5)  //=> 10
console.log(5 - 5)  //=> 0
console.log(5 * 5)  //=> 25
console.log(5 ** 5) //=> 3125
console.log(5 / 5)  //=> 1
console.log(5 % 5)  //=> 0


let num1 = 20
let num2 = 50
let totalNumber = num1 + num2 
console.log(totalNumber);   //=> 70


// Increment

let gameCounter = 100 
gameCounter++; // Postfix increment
console.log(gameCounter);   //=> 101

let A = 200
++A; // Prefix increment
console.log(A)  //=> 201


// Decrement

let student_number = 33

--student_number; // Prefix decrement

console.log(student_number);    //=> 32


let results = 80
results--; // Postfix decrement
console.log(results); //=> 79
