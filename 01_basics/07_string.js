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

console.log(gameName.length); // Length - This property returns the number of code units in the string. 

console.log(gameName.at)