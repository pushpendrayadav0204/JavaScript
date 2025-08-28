// Datatypes Summary

// Primitive
// there are 7 types of Primitive Data type:
// String, Number, Boolean, null, undefined, Symbol,BigInt.

const score = 100;
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = symbol('123')
console.log(id === anotherId); // false

const bigNumber = 3456889712548963;


// Refrence (Non primitive )
// Array, objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];
console.log(typeof(heros))


let myObj = {
    name : "PUSHP",
    age : 20,
}

const myFunction = function(){
    console.log("Hello word");
}