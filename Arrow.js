const user = {
    username : "Pushpendra",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);
        console.log(this); // This function current values print karta hai 
    /* Output => Pushpendra,welcome to website
    {
        username: 'Pushpendra',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]   
    }
    Pushp ,welcome to website
    {
        username: 'Pushp ',
        price: 999,
        welcomeMessage: [Function: welcomeMessage]   
    }*/
    }
}
//user.welcomeMessage()  // Output => Pushpendra,welcome to website.
//user.username = "Pushp "
//user.welcomeMessage() // Output => Pushp,welcome to website
//console.log(this) // Output => {}



/*function chai(){
    let username = "Pushpendra"
    console.log(this.username); // Output => undefined. ()
}
chai()*/

//********* Arrow Function **************** */

/*const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4)) // Output => 7.*/


// Implicite return 

//const addTwo = (num1, num2) =>   num1 + num2;
//console.log(addTwo(5,9)) // Output => 14.

const addTwo = (num1, num2) =>   (num1 + num2); // Agr "{---}" => Required return keyword, "(---)" => does't required return keyword. 
console.log(addTwo(8,2)) // Output => 10.

