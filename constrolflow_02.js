// Switch
// Syntax
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

const month = 5
switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb.")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("MAy")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("Agust")
        break;
    case 9:
        console.log("Sep.")
        break;
    case 10:
        console.log("Oct.")
        break;
    case 11:
        console.log("Nav.")
        break;
    case 12:
        console.log("Dec.")
        break;
    default:
        console.log("Default Value")
        break;
}


// ********************* Truthy And Falsy Values *********************

// Falsy Values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values => "0", 'false', " ", [], {}, function(){}


// Nullish Coalesing Operator (??): null undefined.

/*let val1;
val1 = 5 ?? 10
console.log(val1); // Output => 5.*/

let val1;
val1 = null ?? 10
console.log(val1) // Output => 10.


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")