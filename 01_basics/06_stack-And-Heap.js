// Stack and Heap memory in javascript

// Stack memory all are Non-primitive Datatype -
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

let myFirstName = "Ahnaf";
let surName = myFirstName;
surName = "Tahmid";

console.log(myFirstName);
console.log(surName);

// Heap memory all are Non-primitive Datatype -
// Arry
// Object
// Function

let userOne = {
  name: "Ahnaf Tasin",
  email: "ahnaf.info@gmail.com",
  age: 23,
};

let userTwo = userOne;

userTwo.name = "Ahnaf Tahmid";

console.log(userOne);
console.log(userTwo);

// Output same
