// Singleton 

// object literals

const mySym = Symbol("key1");

const jsUser ={
    name : "PUSHP",
    "full name" : "Pushpendra Yadav",
    mySym : "mykey1", // it is not proper way to use symbol.
    [mySym] : "mykey1", //// it is not proper way to use symbol.
    age : 18,
    location : "Borawan",
    email : "pushp@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.log(jsUser.email) // Output => pushp@gmail.com.
console.log(jsUser["email"]); // Output => pushp@gmail.com.

console.log(jsUser.fullname); // Output => undefined (It is not access by dot operator.)
console.log(jsUser["full name"]); // Output => Pushpendra Yadav (It is only accessed by square brackets.)
console.log(jsUser.mySym); // Output => mykey1 (It is not Proper way to access symbol.)
console.log(typeof jsUser.mySym); // Output => string
console.log(jsUser[mySym]); // Output => mykey1 (It is a Proper way to access symbol.)
console.log(typeof jsUser[mySym]); // Output => string 

jsUser.email = "pushpendra@gmail.com";
console.log(jsUser["email"]); // Output => pushpendra@gmail.com ( In objects "=" operater is used to change the value.)

// Object.freeze(jsUser); // Freeze is used to lock the information of object, it does't allow to make changes in object's information.
jsUser.age = 19;
console.log(jsUser);

jsUser.greeting = function()
{
    console.log("Hello JS User");
}

jsUser.greetingTwo = function()
{
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting); // Output => [Function (anonymous)] (Function Return Back.).
console.log(jsUser.greetingTwo()); // Output => Hello JS User, PUSHP
