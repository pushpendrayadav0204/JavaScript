const accountId = 12340;
let accountEmail = 'pushp@gmail.com';
var accountPassword = '12345';
accountCity = 'Khargone';
let accountState; // undefined

//accountId = 12345; // not allowed
accountEmail = 'pushpy@gmail.com'; // allowed
accountPassword = '54321'; // allowed
accountCity = 'Indore'; // allowed

console.log(accountId);

/*
 Prefer not to use var for variable declaration
 because of issue in block scope and function scope
 use let and const instead of var
 and use const by default unless you know that value will change
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);