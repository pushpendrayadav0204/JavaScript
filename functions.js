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

/*function addTwoNumbers(number1, number2){
    return number1 + number2;
}
const result = addTwoNumbers(3,1); 
//console.log(result); //Output => 4.


function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("Pushp")); //Output => Pushp just logged in.
console.log(loginUserMessage()); //Output => undefined just logged in.*/


function calculateCartPrice(...num1){  //"..." rest operator
      return num1
}
//console.log(calculateCartPrice(200, 400, 500)) // Output => [ 200, 400, 500 ].

function calculateCartPrice(value1, value2, ...num1){
    return num1;
}
//console.log(calculateCartPrice(100,200,300,400,500,600)); // Output => [ 300, 400, 500, 600 ].


const user = {
    username: "Pushpendra",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); // Output => username is Pushpendra and price is 199
}
handleObject(user);


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); // Output => username is PUSHP and price is 399.
}
handleObject({
    username: "PUSHP",
    price: 399
});


const myNewArray = [200, 400, 500, 600]
function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray)); // Output => 400.
console.log(returnSecondValue([200,800,500,140,502])); // Output => 800.