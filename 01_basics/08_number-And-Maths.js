const score = 300;
console.log(score);

const mainNumber = new Number(400);
console.log(mainNumber.toString().length);
console.log(mainNumber.toFixed(2));

const otherNumber = 327.489;
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));

Maths;

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(7.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.min(7, 4, 2, 9, 5));
console.log(Math.max(7, 4, 2, 9, 5));
console.log(Math.random());

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
