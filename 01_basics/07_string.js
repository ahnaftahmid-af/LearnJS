const myName = "Ahnaf Tahmid";
const repoCount = 17;

// Don't Recommend
// console.log(
//   "Hello this is my name " + myName + " and this is my github repo " + repoCount
// ); // It's an old version to declare the string.

// Recommend
console.log(
  `Hello this is my name ${myName} and this is my github repo ${repoCount}`
); // This is a modern way to declare the string. and it's called - "String Interpolation"

// How to write a right String declare method // String is Object
const gameName = new String("Tahmid");
console.log(gameName);

// length - This property returns the number of code units in the string.
console.log(gameName.length);

// at() method //////////////////////////////////////////////////
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

// charAt() method //////////////////////////////////////////////////
const demoText =
  "Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character in a string called str is str.length - 1.";

console.log(`The character at index 7 is '${demoText.charAt(7)}'`);

// concat() method //////////////////////////////////////////////////
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"

// toString() method //////////////////////////////////////////////////
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"

// toLocaleUpperCase() method //////////////////////////////////////////////////
const city = "istanbul";

console.log(city.toLocaleUpperCase("en-US"));
// Expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase("TR"));
// Expected output: "İSTANBUL"

// Split() method //////////////////////////////////////////////////
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// PadStart() method //////////////////////////////////////////////////
const password_Number = "2423543634853";
const sliceLast4_Number = password_Number.slice(-4);
const hidden_PassNumber = sliceLast4_Number.padStart(
  password_Number.length,
  "*"
);

console.log(hidden_PassNumber);
