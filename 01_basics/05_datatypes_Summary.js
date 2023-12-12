// Primitive datatypes 7 catagory :
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

const demoString = "Hello Ahnaf";
console.log(demoString); // String

const demoNumber = 12345;
console.log(demoNumber); // Number

const demoNumberx = 1234.56;
console.log(demoNumberx); // Number

const demoBoolean = true;
console.log(demoBoolean); // Boolean

let userEmail;
console.log(userEmail); // Undefined

let userEmail1 = undefined;
console.log(userEmail1); // Undefined

const outSideTeap = null;
console.log(userEmail1); // Null

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(typeof id === anotherId); // Symbol

const bigInt = 123234572375083475834705834782834n;
console.log(bigInt); // BigInt

// Referance (Non Primitive) dataTypes
// Arry
// Object
// Function

// Array
const myArrayName = ["Ahnaf", "Tahmid", "Tasin"];
console.log(typeof myArrayName);

// Object
let myObeject = {
  fristName: "Ahnaf",
  age: 23,
  email: "ahnaf@gmail.com",
};
console.log(typeof myObeject);

// Function
const myFunc = function () {
  console.log("Hello World");
};
console.log(myFunc);

//Type of val	Result (https://262.ecma-international.org/5.1/#sec-11.4.3)
// Undefined	| "undefined"
// Null	      | "object"
// Boolean	  | "boolean"
// Number	    | "number"
// String	    | "string"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".


