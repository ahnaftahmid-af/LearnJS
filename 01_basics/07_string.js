const myName = "Ahnaf Tahmid";
const repoCount = 17;

// Don't Recommend
// console.log(
//   "Hello this is my name " + myName + " and this is my github repo " + repoCount
// ); // It's an old version to declare the string.

// Recommend
// console.log(
//   `Hello this is my name ${myName} and this is my github repo ${repoCount}`
// ); // This is a modern way to declare the string. and it's called - "String Interpolation"

// How to write a right String declare method // String is Object
const gameName = new String("Tahmid");
console.log(gameName);

// length - This property returns the number of code units in the string.
console.log(gameName.length);

// at() method
const bookText =
  "The at() method of String values takes an integer value and returns a new String consisting of the single UTF-16 code unit located at the specified offset.";

let index = 10; // Positive value
console.log(
  `An index of '${index}' returns the character '${bookText.at(index)}'`
);

let index2 = -5; // Negative value
console.log(
  `An index2 of '${index2}' returns the character '${bookText.at(index2)}'`
);
