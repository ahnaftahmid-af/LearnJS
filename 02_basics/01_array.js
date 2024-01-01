const myArray = [0, 1, 2, 3, 4, 5];
// const myArray = [0, 1, 2, "Hello", 4.9, true]
// const myArr = new Array(0, 1, 2, 3, 4, 5)

// Push //////////////////////////////////////////////////
myArray.push(6); // braket ar vitore je ja dibo seta Arrayr moddhe store korbe
// myArray.push(9);
console.log(myArray);

// Pop //////////////////////////////////////////////////
myArray.pop(); // kono peramiter pass hobe nah. Pop moloto last value delete kore fele
console.log(myArray);

// Unshift //////////////////////////////////////////////////
myArray.unshift(9); //shift 'frist/ 0' index ay value store kore
console.log(myArray);

// Shift //////////////////////////////////////////////////
myArray.shift(); // kono peramiter pass hobe nah. shift 'frist/ 0' index ay value delete kore fele
console.log(myArray);

// Join //////////////////////////////////////////////////
const newArray = myArray.join(); // value ke String banay fele
console.log(newArray);

// Includes //////////////////////////////////////////////////
console.log(myArray.includes(9)); // qestion ask kore True and False check kore answer ber kore neya
console.log(myArray.includes(3));

// Slice //////////////////////////////////////////////////

console.log("A =", myArray);
const newArr1 = myArray.slice(1, 3);
console.log("Slice :", newArr1);

// Splice //////////////////////////////////////////////////
console.log("B =", myArray);
const newArr2 = myArray.splice(1, 3);
console.log("Splice :", newArr2);

console.log("C :", myArray, "Main Array changed"); // Splice korate amr main Array change hoye geche.
