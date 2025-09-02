/*function sayMyName(){
    console.log("P");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("P");
}
sayMyName()*/
                        //|-> Perameters. 
/*function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}
//addTwoNumbers(3,4); // output => 7.
               //|-> Arrguments.

addTwoNumbers(3,"4"); // Output => 34 (Here 4 is trated as string.)
const result = addTwoNumbers(3,5); // Output => 8.
console.log("Result: ",result); //Output => undefined.*/


/*function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(3,8);
console.log("Result: ",result); // Output => 11.*/


/*function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
    console.log("PUSHP"); // Function does't allow to execute or print the code lines which are writen after "return".
}
const result = addTwoNumbers(3,8);
console.log("Result: ",result); // Output => 11.*/


/*function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    console.log("PUSHP");
    return result;
}
const result = addTwoNumbers(3,8);
console.log("Result: ",result); // Output => PUSHP , Result:  11.*/

function addTwoNumbers(number1, number2){
    return number1 + number2;
}
const result = addTwoNumbers(3,1); 
//console.log(result); //Output => 4.


function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("Pushp")); //Output => Pushp just logged in.
console.log(loginUserMessage()); //Output => undefined just logged in.