// if 

//const isUserloggedIn = "Pushpendra" 
/*if(isUserloggedIn == "Pushpendra"){
    console.log("Username Exist.");  // Output => Username Exist.
}

// < , >, <=, >=, ==, !=, ===

if( 2 == "2"){  // Here first string will convert into number hence 2 = 2.
    console.log("Yes"); // Output => Yes.
}

if( 2 === "2"){  // Here it compare number as well as data type also hence 2 != "2".
    console.log("Yes");
}
else{
    console.log("No"); // Output => No
}

// Shorthand Notation

/*const balance = 1000;
if(balance > 500) console.log("Greater then 500"); // Output => Greater then 500 
else console.log("less then 500");*/

/*const balance = 400;
if(balance > 500) console.log("Greater then 500"); 
else console.log("less then 500"); // Output => Less then 500 

// Nested if
/*const score = 80;
if(score >=90)
{
    console.log("Grade: A+")
}
else if(score>=80)
{
    console.log("Grade: A")
}
else if(score>=70)
{
    console.log("Grade: B+")
}
else if(score>=60)
{
    console.log("Grade: B")
}
else if(score>= 50)
{
    console.log("Grade: C")
}
else
{
    console.log("Fail")
}
*/

/*const isUserloggedIn = true
const debitCard = true
if(isUserloggedIn && debitCard){
    console.log("Allow to Buy Items");
}*/

const isUserloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow to But Items");
}

