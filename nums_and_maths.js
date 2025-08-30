/*const score = 400;
console.log(score);  // output => 400

const balance = new Number(100);
console.log(balance);  // output => [Number: 400]

console.log(balance.toString().length);  // output => 3
console.log(balance.toFixed(1));  // output => 100.0

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));  // output => 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));  // output => 10,00,000
*/


// ****************** MATHS **********************

/*console.log(Math.abs(-4)); // output => 4
console.log(Math.round(4.6)); // output => 5
console.log(Math.ceil(4.2)); // output => 5
console.log(Math.floor(4.9)); // output => 4
console.log(Math.min(4, 3, 6, 8)); //output => 3
console.log(Math.max(4, 3, 6, 8)); //output => 8*/

console.log(Math.random());  // output rendom 0 or 1 ke bich me aayega.
console.log((Math.random()*10)+1); // output 1 se jyada aayega 

// output 10 or 20 ke bich chahiye...

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);  // output => In between 10 and 20