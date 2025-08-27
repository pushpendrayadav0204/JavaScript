"use strict"; /* treat all JS code as newer version */

//alert(3 + 3); /* we are using nodejs, not browser*/

console.log(3 + 3); 
console.log("PUSHP"); // code readable by humans should be high


let name = "Pushp"; // string literal
let age = 21; // number literal     
let isApproved = false; // boolean literal
let firstName = undefined; // not used
let selectedColor = null; // empty value
// null is used to reset the value of a variable
// undefined means a variable has been declared but not assigned any value yet
//BigInt largestNumber = 999999999999999999n; // BigInt literal it used to store large numbers
let symbol = Symbol("id"); // Symbol literal it is used to create unique identifiers for objects

/* number => 2 to the power of 53
    bigint => store large numbers
    string => '',"",``
    boolean => true/false
    undefined => variable not assigned any value
    null => empty value
    symbol => unique identifiers for objects
    object => complex data structures
*/
console.log(typeof "Pushp"); // typeof operator is used to know the datatype of a variable
console.log(typeof 21); // output: number
console.log(typeof true); // output: boolean    
console.log(typeof undefined); // output: undefined
console.log(typeof null); // output: object (this is a bug in JS)




