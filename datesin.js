// Dates

/*let myDate = new Date();
console.log(myDate); // output => 2025-08-31T04:04:05.944Z
console.log(myDate.toString()); // output => Sun Aug 31 2025 09:34:05 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());  // output => 2025-08-31T04:04:05.944Z
console.log(myDate.toLocaleDateString());  // output => 31/8/2025
console.log(myDate.toLocaleString());  // output => 31/8/2025, 9:36:46 am
console.log(typeof (myDate));  // output => Object.
*/
/*let myCreateDate = new Date(2023, 0, 23); // In JavaScript months start from 0.
console.log(myCreateDate.toDateString()); // output => Mon Jan 23 2023.*/

/*let myCreateDate = new Date(2023, 0, 23, 5,3); // In JavaScript months start from 0.
console.log(myCreateDate.toLocaleString());  // output => 23/1/2023, 5:03:00 am.*/

/*let myCreateDate = new Date("2023-01-14"); // yyyy-mm-dd
console.log(myCreateDate.toLocaleString()); // Output => 14/1/2023, 5:30:00 am (in single digit month start from 0 and in double digit month start from 1)
*/

//let myCreateDate = new Date("01-14-2023"); // mm-dd-yyyy.
//console.log(myCreateDate.toLocaleString());  // Output => 14/1/2023, 12:00:00 am


/*let myTimeStamp = Date.now()
console.log(myCreateDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000))*/

let newDate = new Date()
console.log(newDate.getMonth()); //Output => 7 (August (month number))
console.log(newDate.getDay()); // Output => 0 (SUnday (Day Number)).

newDate.toLocaleString('default', {
    weekday : "long",
    
 })

console.log(newDate)




