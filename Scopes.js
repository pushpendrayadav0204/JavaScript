/*if(true) {
    let a = 10;
    var b = 20;
    const c = 30;
}

console.log(a); // Not Accessable outside the Scope.
console.log(b); // Output => 20
console.log(c); // Not Accessable outside the Scope.
*/


/*let a = 300; // Global Scope.
var b = 400; // Var Global and Local dono Scope me Access ho jata hai.
if(true) {
    let a = 10; // Local Scope.
    var b = 20; // Local Scope.
    const c = 30;
}
console.log(a); // output => 300
console.log(b); // output => 20.
console.log(c); // Not Accessable outside the Scope.
*/


/*function one(){
    const username = "Pushp"

    function two(){
        const website = "Youtube"
        console.log(username); //Output => Pushp
    }
    console.log(website); // Not Accessable
    two();
}
one();*/

/*if(true){
    const username = "Pushp"
    if(username === "Pushp"){
        const website = " Youtube"
        console.log(username + website);
    }
    //console.log(website); // Not Accessable 
    console.log(username); // Output => Pushp
}
console.log(username) // NOt Accessable*/

// ************** INTERESTING ****************

/*function addOne(num){
    return num + 1
}
console.log(addOne(5)) // Output => 6.

const addTwo = function(num){  // This is known as "Expressions"
    return num + 2
}
console.log(addTwo(5)) // Output => 7.*/

//*****************************************************

// Functions Can be declared also like --->
console.log(addOne(5)) // Output => 6.
function addOne(num){
    return num + 1 
}  

//console.log(addTwo(5)) // It can not declared like this.
const addTwo = function(num){
    return num + 2
}
